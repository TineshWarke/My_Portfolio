'use client'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { intro } from '../data';

const About = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="p-5 pb-0">
            <div className='glass opacity-90 m-auto p-4 sm:p-5 md:p-7 flex flex-col max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] rounded-box overflow-hidden z-0 cursor-pointer'>
                <div className='bg-game-bg-1 bg-cover rounded-box flex-grow hover:bg-transparent h-[340px] sm:h-[500px] md:h-[500px] lg:h-[560px] overflow-scroll scrollbar-none'>
                    <div className='bg-base-300/80 dark:bg-black/80 mx-2 sm:mx-4 md:mx-6 rounded-box p-2 my-4 sm:my-5 md:my-6 cursor-none'>
                        <div className="text-sm sm:text-base md:text-lg dark:text-white font-Sofadi-One text-custom-96 text-justify px-2 sm:px-3 md:px-4">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(intro)
                                        .pauseFor(120000)
                                        .deleteAll(0)
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 0,
                                    delay: 30,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
