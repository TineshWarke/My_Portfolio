"use client";
import { motion } from "framer-motion";
import { services } from "../data";
import { fadeInUP, revealOnce, stagger } from "../animations";
import ServiceCard from "./ServiceCard";

const Services = () => (
  <section
    id="strengths"
    className="m-auto max-w-[1200px] flex-grow rounded-box pt-24"
  >
    <h2 className="mb-5 ml-4 text-center text-2xl font-bold lg:text-left">
      What Can I Do
    </h2>
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={revealOnce}
    >
      {services.map((service) => (
        <motion.div
          key={service.title}
          variants={fadeInUP}
          className="rounded-box"
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Services;
