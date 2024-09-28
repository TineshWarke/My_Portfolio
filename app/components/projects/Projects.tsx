'use client'
import React, { useState } from 'react'
import { projects as projectData } from '../data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { fadeInUP, stagger } from '../animations'
import ProjectsNavbar from './ProjectsNavbar'
import { Category } from '../type'

const Projects = () => {
  const [projects, setProjects] = useState(projectData)
  const [active, setActive] = useState('all')

  const filterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectData)
      setActive(category)
      return
    }

    const newData = projectData.filter((project) => project.category.includes(category));
    setProjects(newData)
    setActive(category)
  }

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

      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-3' variants={stagger} initial='initial' animate='animate'>
        {
          projects.map(project => (
            <motion.div className='col-span-1 p-2' key={project.name} variants={fadeInUP}>
              <ProjectCard project={project} />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Projects
