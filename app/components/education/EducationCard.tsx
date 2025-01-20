import React, { FunctionComponent } from 'react';
import { IEducation } from '../type';
import Image from 'next/image';

const EducationCard: FunctionComponent<{ education: IEducation }> = ({ education: { degree, institution, grade, year, image_path } }) => {

    return (
        <div className='p-3 m-2 hover:shadow-[0px_0px_20px_1px_rgba(255,187,118,0.50)] bg-base-300/50 dark:bg-transparent hover:border-2 hover:border-solid hover:border-white flex items-center space-x-4 glass min-h-32 rounded-box h-auto hover:-translate-y-2 cursor-pointer duration-200'>
            <div className='flex-shrink-0'>
                <Image height={60} width={60} className='my-auto lg:ml-6 lg:mr-4 bg-transparent object-cover' src={image_path} alt={'institution logo'} />
            </div>
            <div className='flex-grow max-w-full pr-3'>
                <h4 className='text-lg md:text-xl font-bold'>{degree}</h4>
                <h4 className='text-sm md:text-base text-justify'>{institution}</h4>
                <h4 className='text-sm md:text-base flex justify-between'><span>{grade}</span> <span>{year}</span></h4>
            </div>
        </div>
    );
};

export default EducationCard;
