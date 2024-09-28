'use client';
import React, { FunctionComponent, useState } from 'react';
import { ISkills } from '../type';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CircularBar: FunctionComponent<{ data: ISkills }> = ({ data: { name, level, icon } }) => {
    const [isInView, setIsInView] = useState(false);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (parseInt(level) / 100) * circumference;

    const variants = {
        initial: {
            strokeDashoffset: circumference,
        },
        animate: {
            strokeDashoffset: progressOffset,
            transition: {
                duration: 4,
                type: 'spring',
                damping: 5,
                stiffness: 20,
            },
        },
    };

    return (
        <motion.div className="relative flex items-center justify-center w-32 h-32 cursor-pointer"
            onMouseEnter={() => setIsInView(false)}
            onMouseLeave={() => setIsInView(true)}
            whileHover={{ scale: 1.1 }}>

            <svg className="absolute w-full h-full transform rotate-[-90deg] z-10">
                <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                />
            </svg>

            <svg className="absolute w-full h-full transform rotate-[-90deg] z-20">
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth="20"
                    strokeDasharray={circumference}
                    strokeDashoffset={isInView ? progressOffset : circumference}
                    strokeLinecap="round"
                    variants={variants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                />
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#22ff5e" />
                        <stop offset="100%" stopColor="#002200" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="absolute flex flex-col items-center justify-center glass rounded-full z-0">
                <Image height={50} width={50} className='m-4' src={icon} alt="-" />
            </div>

            <motion.div
                onViewportEnter={() => setIsInView(true)}
                onViewportLeave={() => setIsInView(false)}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            />
        </motion.div>
    );
};

export default CircularBar;
