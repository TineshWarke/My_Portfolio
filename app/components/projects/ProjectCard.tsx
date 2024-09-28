import React, { FunctionComponent } from 'react'
import { IProject } from '../type'
import Image from 'next/image'

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
    project: {
        name, description, image_path, deployed_url, github_url, category, key_techs
    }
}) => {
    return (
        <div className="card bg-gradient-to-b m-auto from-white/40 to-base-300/80 dark:to-green-500/80 to-80% glass h-[500px] shadow-xl cursor-pointer overflow-hidden">
            <figure className="px-10 pt-10">
                <Image src={image_path} alt={name} height={350} width={450} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
                <p className='text-justify'>{description[0]}</p>
            </div>

            <div className="absolute  glass bg-base-300 dark:bg-black dark:text-white w-full h-0 z-10 m-0 rounded-box opacity-0 p-0 hover:opacity-90 hover:h-full duration-500">
                <div className="card-body">
                    <h2 className="card-title text-justify dark:text-green-500">{name}</h2>
                    <p className='text-justify'>{description[1]}</p>
                    <p className='text-justify'>{description[2]}</p>
                    <p className='text-justify'>{description[3]}</p>

                    <div className='flex flex-wrap gap-2 justify-center'>
                        {
                            key_techs.map((tech, index) => (
                                <div key={index}>
                                    <button className='btn glass m-1 dark:bg-black dark:btn-primary dark:text-white dark:border-white border-solid'>
                                        {tech}
                                    </button>
                                </div>)
                            )
                        }
                        <a href={github_url} target="_blank" rel="noopener noreferrer">
                            <button className='btn glass w-12 h-12 rounded-full p-0 mt-1 dark:bg-black dark:btn-primary dark:text-white dark:border-white my-2 border-solid'>
                                <Image src={'/icons/github-1.png'} alt={name} height={40} width={40}/>
                            </button>
                        </a>
                        {
                            deployed_url ?
                                <a href={deployed_url} target="_blank" rel="noopener noreferrer">
                                    <button className='btn glass w-12 h-12 rounded-full p-0 mt-1 dark:bg-black dark:btn-primary dark:text-white dark:border-white my-2 border-solid'>
                                        <Image src={'/icons/link.png'} alt={name} width={25} height={25} />
                                    </button>
                                </a>
                                : <a></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
