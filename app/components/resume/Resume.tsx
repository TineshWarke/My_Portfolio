'use client'
import React, { useEffect, useState } from 'react'

const Resume = () => {
    const [view, setView] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        // Set initial value
        handleResize();

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div id='resume' className='pt-24'>
            <div className='max-w-[1000px] m-auto rounded-box min-h-[250px] glass  p-7'>
                <div className='max-w-[944px] min-h-[194px] bg-game-bg-2 bg-cover rounded-box bg-center py-16'>
                    {
                        !view &&
                        <div className='w-fit h-fit m-auto'>
                            {isLargeScreen ?
                                <button className='btn glass bg-base-300/50 dark:bg-transparent text-xl mt-2 dark:hover:bg-black dark:hover:text-white dark:border-black dark:hover:border-white border-solid' onClick={() => { setView(true); handleScroll("resume") }}>
                                    Resume
                                </button>
                                :
                                <a href="/resume/Tinesh_Warke_Resume.pdf" download>
                                    <button className='btn glass bg-base-300/50 dark:bg-transparent text-xl mt-2 dark:hover:bg-black dark:hover:text-white dark:border-black dark:hover:border-white border-solid'>
                                        Resume
                                    </button>
                                </a>}
                        </div>
                    }
                    <div className={`${view ? 'h-fit py-5' : 'h-0 overflow-hidden'} w-fit m-auto glass rounded-box`}>
                        <div className='bg-resume-bg-1 bg-cover h-[998px] w-[750px] mx-5 rounded-box' />
                        <div className='grid grid-cols-2 w-fit h-fit m-auto'>
                            <a href="/resume/Tinesh_Warke_Resume.pdf" download>
                                <button className='btn glass bg-base-300/50 dark:bg-transparent text-xl mt-5 m-auto dark:hover:bg-black dark:hover:text-white border-2 dark:border-black dark:hover:border-white border-solid'>
                                    Download
                                </button>
                            </a>
                            <button className='btn glass bg-base-300/50 dark:bg-transparent text-xl mt-5 m-auto dark:hover:bg-black dark:hover:text-white border-2 dark:border-black dark:hover:border-white border-solid' onClick={() => { setView(false); handleScroll("resume") }}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
