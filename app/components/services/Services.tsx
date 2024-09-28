'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data';
import ServiceCard from './ServiceCard';
import { fadeInUP, stagger } from '../animations';

const Services = () => {
    return (
        <div className='flex-grow bg-transparent max-w-[1200px] pt-24 m-auto dark:text-white rounded-box' id='strengths'>
            <h1 className="mb-5 ml-4 text-2xl text-center lg:text-left dark:text-green-500 font-bold">What Can I Do</h1>
            <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 gap-6'
                variants={stagger}
                initial='initial'
                whileInView='animate'
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUP}
                        className='rounded-box bg-transparent'
                    >
                        <ServiceCard service={service} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
