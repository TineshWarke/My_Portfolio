'use client'
import React, { FunctionComponent } from 'react';
import { ISkills } from '../type';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
                <Image height={6} width={6} src={icon} alt={`${name} icon`} />
                <span className="text-xs sm:text-sm md:text-base">{name}</span>
            </motion.div>
        </div>
    );
}

export default Bar;
