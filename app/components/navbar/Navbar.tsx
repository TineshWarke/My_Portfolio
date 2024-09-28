'use client'
import React, { useEffect, useState } from 'react'
import Theme from './Theme'

const Navbar = () => {
    const [visibility, setVisibility] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    };

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <div className="navbar bg-transparent w-full sticky top-0 z-50">
            <div className={`navbar ${visibility ? 'glass bg-base-300/50 dark:bg-transparent' : 'bg-transparent'} sticky shadow-xl rounded-box`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu glass bg-black/80 menu-sm dropdown-content rounded-box z-[1] mt-3 w-auto p-2 shadow">
                            <li className='dark:text-green-500 font-bold' onClick={() => handleScroll("home")}><a>About </a></li>
                            <li className='dark:text-green-500 font-bold' onClick={() => handleScroll("strengths")}><a>Strengths </a></li>
                            <li className='dark:text-green-500 font-bold' onClick={() => handleScroll("resume")}><a>Resume </a></li>
                            <li className='dark:text-green-500 font-bold' onClick={() => handleScroll("projects")}><a>Projects </a></li>
                            <li className='dark:text-green-500 font-bold' onClick={() => handleScroll("skills")}><a>Skills </a></li>
                            <li>
                                <details>
                                    <summary className='dark:text-green-500 font-bold'>Theme</summary>
                                    <Theme />
                                </details>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-Sofadi-One">Tinesh</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='dark:text-white dark:hover:text-green-500 font-bold' onClick={() => handleScroll("home")}><a>About </a></li>
                        <li className='dark:text-white dark:hover:text-green-500 font-bold' onClick={() => handleScroll("strengths")}><a>Strengths </a></li>
                        <li className='dark:text-white dark:hover:text-green-500 font-bold' onClick={() => handleScroll("resume")}><a>Resume </a></li>
                        <li className='dark:text-white dark:hover:text-green-500 font-bold' onClick={() => handleScroll("projects")}><a>Projects </a></li>
                        <li className='dark:text-white dark:hover:text-green-500 font-bold' onClick={() => handleScroll("skills")}><a>Skills </a></li>
                        <li>
                            <details>
                                <summary className='mr-3 dark:text-white dark:hover:text-green-500 font-bold'>Theme</summary>
                                <Theme />
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
