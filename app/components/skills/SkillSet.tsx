'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ISkills } from '../type';
import { motion } from 'framer-motion';
import CircularBar from './CircularProgress';

const SkillSet: React.FC<{ skills: ISkills[] }> = ({ skills }) => {
  const [positions, setPositions] = useState<{ left: number; top: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const radius = 50;
  const padding = 0;
  const bottomPadding = 28;
  const minMargin = 30;
  const moveDistance = 50;

  const getRandomPosition = () => {
    const maxX = 1200 - radius * 2 - padding - bottomPadding;
    const maxY = 550 - radius * 2 - padding - bottomPadding;
    const x = Math.random() * maxX + padding;
    const y = Math.random() * maxY + padding;
    return { left: x, top: y };
  };

  const checkCollision = (newPos: { left: number; top: number }, existingPositions: { left: number; top: number }[]) => {
    return existingPositions.some((pos) => {
      const dx = newPos.left - pos.left;
      const dy = newPos.top - pos.top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < radius * 2 + minMargin;
    });
  };

  const generateRandomPositions = () => {
    const newPositions: { left: number; top: number }[] = [];
    while (newPositions.length < skills.length) {
      const newPos = getRandomPosition();

      if (!checkCollision(newPos, newPositions)) {
        newPositions.push(newPos);
      }
    }
    setPositions(newPositions);
  };

  // const generateRandomPositions = () => {
  //   const newPositions: { left: number; top: number }[] = [];
  //   let attempts = 0; // Track the number of attempts
  //   while (newPositions.length < skills.length && attempts < 1000) { // Limit to 1000 attempts
  //     const newPos = getRandomPosition();

  //     if (!checkCollision(newPos, newPositions)) {
  //       newPositions.push(newPos);
  //     }
  //     attempts++;
  //   }
  //   setPositions(newPositions);
  // };

  useEffect(() => {
    generateRandomPositions();
  }, [skills]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const updatedPositions = positions.map((pos, index) => {
      const dx = pos.left + radius - mouseX;
      const dy = pos.top + radius - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        const angle = Math.atan2(dy, dx);
        let newX = pos.left + Math.cos(angle) * moveDistance;
        let newY = pos.top + Math.sin(angle) * moveDistance;

        newX = Math.max(padding, Math.min(newX, 1200 - radius * 2 - bottomPadding));
        newY = Math.max(padding, Math.min(newY, 550 - radius * 2 - bottomPadding));

        if (!checkCollision({ left: newX, top: newY }, positions.filter((_, i) => i !== index))) {
          return { left: newX, top: newY };
        }
      }
      return pos;
    });

    setPositions(updatedPositions);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative flex bg-center items-center justify-center bg-game-bg-10 bg-cover rounded-box"
      style={{ width: '1200px', height: '550px', padding: `0px 0px 0px 0px` }}
      onViewportEnter={generateRandomPositions}
      onMouseMove={handleMouseMove}
    >
      <button className='btn glass opacity-90 text-3xl mt-2 bg-base-300/80 dark:bg-transparent dark:hover:bg-black z-30 dark:hover:text-white dark:border-black border-solid'>
        My Tech Stack
      </button>

      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${positions[index]?.left}px`,
            top: `${positions[index]?.top}px`,
          }}
          animate={{
            left: positions[index]?.left,
            top: positions[index]?.top,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          <CircularBar data={skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillSet;
