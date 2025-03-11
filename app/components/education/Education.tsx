'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { fadeInUP, stagger } from '../animations';
import EducationCard from './EducationCard';

const Education = () => {
    return (
        <div className='flex-grow bg-transparent max-w-[1200px] pt-24 m-auto rounded-box' id='education'>
            <h1 className="mb-5 ml-4 text-2xl text-center lg:text-left font-bold">Education and Certifications</h1>
            <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 gap-6'
                variants={stagger}
                initial='initial'
                whileInView='animate'
            >
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUP}
                        className={`rounded-box bg-transparent 
                            ${index === 2 ? 'sm:col-span-2 flex justify-center' : ''}`} 
                    >
                        <EducationCard education={edu} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
