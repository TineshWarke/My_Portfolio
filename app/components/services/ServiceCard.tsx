import React, { FunctionComponent } from 'react';
import { IService } from '../type';
import Image from 'next/image';

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { title, about, icon } }) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className='p-3 m-2 hover:shadow-[0px_0px_20px_1px_rgba(255,187,118,0.50)] bg-base-300/50 dark:bg-transparent hover:border-2 hover:border-solid hover:border-white flex items-center space-x-4 glass min-h-32 rounded-box h-auto hover:-translate-y-2 cursor-pointer duration-200'>
      <div className='flex-shrink-0'>
        <Image height={60} width={60} className='my-auto lg:ml-6 lg:mr-4 bg-transparent object-cover' src={icon} alt={title} />
      </div>
      <div className='flex-grow max-w-full pr-3'>
        <h4 className='text-lg md:text-xl dark:text-green-500 font-bold'>{title}</h4>
        <p className='text-sm md:text-base text-justify' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
