"use client";
import { motion } from "framer-motion";
import { education } from "../data";
import { fadeInUP, revealOnce, stagger } from "../animations";
import EducationCard from "./EducationCard";

const Education = () => (
  <section
    id="education"
    className="m-auto max-w-[1200px] flex-grow rounded-box pt-24"
  >
    <h2 className="mb-5 ml-4 text-center text-2xl font-bold lg:text-left">
      Education and Certifications
    </h2>
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={revealOnce}
    >
      {education.map((item, index) => (
        <motion.div
          key={item.degree}
          variants={fadeInUP}
          className={`rounded-box ${
            index === 2 ? "flex justify-center sm:col-span-2" : ""
          }`}
        >
          <EducationCard education={item} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Education;
