'use client'
import React, { FunctionComponent } from 'react';
import { ISkills } from '../type';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{ data: ISkills }> = ({ data: { name, level, icon } }) => {

    const variants = {
        initial: {
            width: 0
        },
        animate: {
            width: level,
            transition: {
                duration: 0.4,
                type: 'spring',
                damping: 10,
                stiffness: 100
            }
        }
    }

    return (
        <div className='text-white glass rounded-full my-2 w-[90%]'>
            <motion.div
                className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-1 flex items-center rounded-full"
                style={{ width: level }}
                variants={variants}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
            >
                <img className='h-6 w-6 sm:h-8 sm:w-8' src={icon} alt={`${name} icon`} />
                <span className="text-xs sm:text-sm md:text-base">{name}</span>
            </motion.div>
        </div>
    );
}

export default Bar;
