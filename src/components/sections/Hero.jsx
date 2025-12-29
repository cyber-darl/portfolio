import React from 'react';
import { words } from '../../constants';
import Button from '../Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../AnimatedCounter';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      { y: 50, opacity: 0 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2 }
    );
  });
  return (
    <section
      id='hero'
      className='relative overflow-hidden pt-[10rem]'
    >
      <div className='absolute top-0 left-0 z-10'>
        <img
          src='/images/bg.png'
          alt='background'
        />
      </div>

      <div className='flex flex-col xl:flex-row items-center justify-center mx-auto my-0 mb-[5rem] gap-10 xl:gap-0'>
        {/* left content */}
        <header className='flex flex-col justify-center items-center md:w-full w-screen md:px-20  md:mb-[12rem] lg:mb-[18rem] xl:mb-0'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-10 md:p-2 p-1 rounded-full bg-white-50'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none max-w-[300px] text-center sm:max-w-[550px]'>
              Hi, I am Kpeale. I am a Frontend-developer and a technical writer.
            </p>
            <div className='flex flex-col items-center justify-center mx-auto'>
              <Button
                className='  md:w-80 md:h-16 w-60 h-12'
                id='button'
                text='See my Work'
              />
            </div>
          </div>
        </header>
        {/* image */}
        {/* <figure>
          <div className='hero-3d-layout '>
            <HeroExperience />
          </div>
        </figure> */}
        <div className=' w-[60%] xl:w-[80%] h-[350px] flex items-center justify-center mx-auto my-0 xl:px-20  '>
          <img
            src='/images/heroImg.JPG'
            alt='hero image'
          />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
