import React from 'react';
import { abilities } from '../../constants';
import TitleHeader from '../TitleHeader';

const SoftSkills = () => {
  return (
    <section className='soft-skills w-full padding-x-lg'>
      <TitleHeader
        title='A little background story'
        subtitle=''
      />
      
      {/* <div className='mx-auto grid-3-cols mt-5'>
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className='card-border rounded-xl p-8 flex flex-col gap-4'
          >
            <div className='size-14 flex items-center justify-center rounded-full'>
              <img
                src={imgPath}
                alt={title}
              />
            </div>
            <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
            <p className='text-white-50 text-lg'>{desc}</p>
          </div>
        ))}
      </div> */}

        <p className='text-white-50 md:text-xl mt-[2rem] relative z-10 pointer-events-none text-center'>
          I wrote my first line of code in 2020, learnt multiple programming languages, 
          joined Upwork in 2022, attracted a lot of jobs involving automated workflows and integrations, and building websites/funnels in no-code or low-code platforms. By 2023, I started creating and contributing to development projects, taking courses and
          gaining certifications from IBM, Havard and Freecodecamp. My versatility comes from having a solid understanding of core computer science principles, and core concepts in various programming languages.
            </p>
    </section>
  );
};

export default SoftSkills;
