import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem: FunctionComponent<{ value: Category | 'all', filterCategory: Function, active: string }> = ({
    value, filterCategory, active
}) => {
    let className = 'cursor-pointer hover:text-accent dark:hover:text-green-500 capitalize'
    if (active === value)
        className += ' text-accent dark:text-green-500'
    return (
        <li className={className} onClick={() => filterCategory(value)}>
            {value}
        </li>
    )
}

const ProjectsNavbar: FunctionComponent<{ filterCategory: Function, active: string }> = (props) => {
    return (
        <div className='flex space-x-3 px-2 py-2 overflow-x-auto list-none z-20 dark:text-base-100'>
            <NavItem value='all' {...props} />
            <NavItem value='Java' {...props} />
            <NavItem value='Python' {...props} />
            <NavItem value='Express' {...props} />
            <NavItem value='React' {...props} />
            <NavItem value='Next.js' {...props} />
            <NavItem value='MySQL' {...props} />
            <NavItem value='MongoDB' {...props} />
        </div>
    )
}

export default ProjectsNavbar
