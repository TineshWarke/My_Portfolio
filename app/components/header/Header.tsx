"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contacts } from "../data";
import Contacts from "./Contacts";
import { debounce } from "lodash";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [cursorVarient, setCursorVarient] = useState("default");

  useEffect(() => {
    const mouseMove = debounce((e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 10);

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const varients = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    animate: {
      height: 120,
      width: 120,
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
      backgroundColor: "white",
      mixBlendMode: "difference" as "difference",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 8,
        stiffness: 80,
      },
    },
    animatesmall: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "white",
      mixBlendMode: "difference" as "difference",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 10,
        stiffness: 90,
      },
    },
  };

  return (
    <div className="relative w-full overflow-x-clip">
      <div
        className="w-[90%] max-w-[360px] h-[250px] sm:h-[310px] glass rounded-box absolute left-2 top-40 p-5 cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 sm:opacity-0 md:opacity-50 lg:opacity-75 xl:opacity-100"
        style={{
          transform: `translateY(${-scrollY * 1.2}px) rotate(16deg)`,
        }}
      >
        <div className="bg-game-bg-9 w-full h-full bg-cover bg-bottom rounded-box" />
      </div>

      <div
        className="w-[90%] max-w-[360px] h-[250px] sm:h-[310px] glass rounded-box absolute right-2 top-40 sm:top-60 p-5 cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 sm:opacity-0 md:opacity-50 lg:opacity-75 xl:opacity-100"
        style={{
          transform: `translateY(${-scrollY * 1.2}px) rotate(-14deg)`,
        }}
      >
        <div className="bg-game-bg-6 w-full h-full bg-cover bg-bottom rounded-box" />
      </div>

      <div
        className="w-[90%] max-w-[360px] h-[200px] sm:h-[250px] md:h-[310px] glass rounded-box absolute  -right-8 top-[600px] sm:top-[700px] md:top-[800px] lg:top-[1150px] p-5 cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 sm:opacity-0 md:opacity-50 lg:opacity-75 xl:opacity-100"
        style={{
          transform: `translateY(${-scrollY * 1.2}px) rotate(20deg)`,
        }}
      >
        <div className="bg-game-bg-7 w-full h-full bg-cover bg-center rounded-box" />
      </div>

      <div
        className="w-[90%] max-w-[360px] h-[200px] sm:h-[250px] md:h-[310px] glass rounded-box absolute -left-24 top-[500px] sm:top-[600px] md:top-[700px] lg:top-[1050px] p-5 cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 sm:opacity-0 md:opacity-50 lg:opacity-75 xl:opacity-100"
        style={{
          transform: `translateY(${-scrollY * 1.2}px) rotate(-25deg)`,
        }}
      >
        <div className="bg-game-bg-8 w-full h-full bg-cover bg-center rounded-box" />
      </div>

      <div className="hero pb-8">
        <div className="hero-content text-neutral-content text-center w-full">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 4,
                  stiffness: 100,
                },
              }}
              className="w-fit m-auto cursor-none"
            >
              <motion.div
                className="bg-transparent opacity-70 h-0 w-0 rounded-full fixed top-0 left-0 pointer-events-none"
                variants={varients}
                animate={cursorVarient}
              />
              <h1
                className="font-Sofadi-One lg:text-9xl text-7xl font-bold"
                onMouseEnter={() => setCursorVarient("animate")}
                onMouseLeave={() => setCursorVarient("default")}
              >
                Tinesh Warake
              </h1>
            </motion.div>
            <div className="w-fit m-auto cursor-none">
              <h1
                className="font-Sofadi-One text-2xl sm:text-4xl font-medium tracking-widest"
                onMouseEnter={() => setCursorVarient("animatesmall")}
                onMouseLeave={() => setCursorVarient("default")}
              >
                Coding the Future: Full-Stack
              </h1>
            </div>
            <div className="w-fit mb-8 m-auto cursor-none">
              <h1
                className="font-Sofadi-One mb-5 text-2xl sm:text-4xl font-medium tracking-widest"
                onMouseEnter={() => setCursorVarient("animatesmall")}
                onMouseLeave={() => setCursorVarient("default")}
              >
                Developer at Work
              </h1>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-1 px-4 max-w-4xl mx-auto">
              {contacts.map((contact, index) => (
                <div key={index}>
                  <Contacts contact={contact} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
