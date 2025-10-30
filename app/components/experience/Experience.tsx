"use client";
import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data";
import { fadeInUP, stagger } from "../animations";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div
      className="flex-grow bg-transparent max-w-[1200px] pt-24 m-auto rounded-box"
      id="education"
    >
      <h1 className="mb-5 ml-4 text-2xl text-center lg:text-left font-bold">
        Work Experience
      </h1>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUP}
            className={`rounded-box bg-transparent 
                            ${
                              index === 2
                                ? "sm:col-span-2 flex justify-center"
                                : ""
                            }`}
          >
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
