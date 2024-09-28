'use client'
import React, { useEffect, useState } from 'react'
import { skills } from '../data'
import Bar from './Bar'
import SkillSet from './SkillSet'
import CircularBar from './CircularProgress'

const MySkills = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="max-w-[1250px] m-auto p-4" id='skills'>
            <div className="items-center justify-center w-fit h-fit m-auto p-7 glass rounded-box">
                {isLargeScreen ?
                    <div className="relative bg-transparent flex items-center justify-center">
                        <SkillSet skills={skills} />
                    </div>
                    :
                    <div>
                        <button className='btn ml-9 w-fit glass opacity-90 text-2xl mt-2 bg-base-300/50 dark:bg-transparent dark:hover:bg-black z-30 dark:hover:text-white dark:border-black border-solid'>
                            My Tech Stack
                        </button>
                        <div className="relative bg-transparent grid gap-2 w-auto grid-cols-2 m-2 items-center justify-center">
                            {
                                skills.map(skill => <CircularBar data={skill} key={skill.name} />)
                            }
                        </div>
                    </div>
                }
            </div>

            {/* Skills list: Hidden on large screens, visible on small/medium screens */}
            {/* <div className="transition-all duration-500 ease-in-out w-screenpy-2 h-auto lg:w-0 lg:h-0 overflow-hidden">
                <div className="grid gap-4">
                    {skills.map(skill => <Bar data={skill} key={skill.name} />)}
                </div>
            </div> */}
        </div >
    )
}

export default MySkills
