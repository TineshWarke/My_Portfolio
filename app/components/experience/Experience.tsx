"use client";
import { motion } from "framer-motion";
import { experience } from "../data";
import { fadeInUP, revealOnce, stagger } from "../animations";
import ExperienceCard from "./ExperienceCard";

const Experience = () => (
  <section
    id="experience"
    className="m-auto max-w-[1200px] flex-grow rounded-box pt-24"
  >
    <h2 className="mb-5 ml-4 text-center text-2xl font-bold lg:text-left">
      Work Experience
    </h2>
    <motion.div
      className="space-y-6"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={revealOnce}
    >
      {experience.map((item) => (
        <motion.div key={item.role} variants={fadeInUP} className="rounded-box">
          <ExperienceCard experience={item} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Experience;
