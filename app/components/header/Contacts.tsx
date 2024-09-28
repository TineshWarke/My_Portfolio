import React, { FunctionComponent, useState } from 'react'
import { IContact } from '../type'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Contacts: FunctionComponent<{ contact: IContact }> = ({ contact: { name, logo, link } }) => {
  const [popup, setPopup] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {
        name !== 'Chess' ?
          <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.8 }} className='btn glass rounded-full pl-0 mx-1.5 dark:hover:bg-black dark:hover:border-white dark:hover:text-white dark:border-black border-solid'>
            <div className='flex rounded-full'>
              <div className={`${name === 'LeetCode' ? 'bg-black' : ''} ${name === 'Github' ? 'bg-white' : ''} rounded-full w-[43px] h-[43px]`}><Image src={logo} alt='-' height={43} width={43}/></div>
              <div className='p-2 text-lg text-center'>
                {name}
              </div>
            </div>
          </motion.div>
          :
          <div>
            <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.8 }}
              className='btn p-0 glass rounded-full pl-0 mx-1.5 dark:hover:bg-black dark:hover:border-white dark:hover:text-white dark:border-black border-solid'
              onMouseEnter={() => setPopup(true)} onMouseLeave={() => setPopup(false)}>
              <div className='flex rounded-full p-1'>
                <div className={`rounded-full`}><Image height={35} width={35} src={logo} alt='-' /></div>
              </div>
            </motion.div>
            <div className={`${popup ? 'visible' : 'hidden'} absolute dark:bg-gray-800 dark:text-white p-2 mt-4 rounded-md shadow-lg`}>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-gray-800 absolute left-[30px] transform -translate-x-1/2 -top-2" />
              Challenge !
            </div>
          </div>
      }
    </a>
  )
}

export default Contacts
