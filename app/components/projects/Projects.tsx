'use client'
import React, { useEffect, useState } from 'react'
import { projects as projectData } from '../data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { fadeInUP, stagger } from '../animations'
import ProjectsNavbar from './ProjectsNavbar'
import { Category } from '../type'

const Projects = () => {
  const [projects, setProjects] = useState(projectData)
  const [active, setActive] = useState('all')
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

  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = isLargeScreen ? 6 : 3

  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const filterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectData)
      setActive(category)
    } else {
      const newData = projectData.filter((project) => project.category.includes(category))
      setProjects(newData)
      setActive(category)
    }
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

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
    <div className="max-w-[1250px] mx-auto py-16 px-4" id='projects'>
      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.8 }} className='w-fit h-fit mx-auto mt-7'>
        <button className='btn glass bg-base-300/50 dark:bg-transparent text-xl dark:bg-black dark:btn-primary dark:text-white border-solid dark:border-white'>
          Projects
        </button>
      </motion.div>

      <div className="mt-4">
        <ProjectsNavbar filterCategory={filterCategory} active={active} />
      </div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-3'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {currentProjects.map(project => (
          <motion.div className='col-span-1 p-2' key={project.name} variants={fadeInUP}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 mb-1">
          <ul className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => { handlePageChange(index + 1), handleScroll("projects") }}
                  className={`px-3 py-1 rounded ${currentPage === index + 1
                      ? 'bg-accent'
                      : 'bg-base-100 '
                    }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Projects
