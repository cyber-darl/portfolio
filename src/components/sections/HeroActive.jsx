import React from 'react';
import { words } from '../../constants';
import Button from '../Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../AnimatedCounter';
import LogoSlider from './LogoSlider';

const HeroActive = () => {
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

      <div className='flex flex-col xl:flex-row items-center justify-center mx-auto my-0 mb-[2rem] gap-10 xl:gap-0'>
        {/* left content */}
        <header className='flex flex-col justify-center items-center md:w-full w-screen md:px-20  md:mb-[12rem] lg:mb-[18rem] xl:mb-0'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                I don't just
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className=''
                      >
                      
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1 className='hero-text-2'>I architect complete solutions </h1>
           
            </div>
              <p className='text-black-50 md:text-xl relative z-10 pointer-events-none max-w-[300px] text-center sm:max-w-[550px]'>
          ✨ Top-Rated Developer (top 10% of all talent on Upwork).  I’m the tech-savvy partner behind your brand that makes sure all your software work together effortlessly and everything runs smoothly daily.

            </p>
          
            <div className='flex flex-col items-center justify-center mx-auto'>
              <Button
                text='My Upwork Profile'
                href = 'https://www.upwork.com/freelancers/~01a56c22fcbf96bd04'
              />
                <p className='text-black-50 md:text-xl relative z-10 pointer-events-none mt-[2rem] max-w-[300px] text-center sm:max-w-[550px]'>
      I have a knack for creating automated workflows and integrations across a single app or multiple software. Chances are if your brand uses a platform for CRM, PM, email marketing or handling websites, I have done some work in there before.
            </p>
            </div>
          </div>
        </header>
        {/* image */}
        {/* <figure>
          <div className='hero-3d-layout '>
            <HeroExperience />
          </div>
        </figure> */}
      </div>
            <LogoSlider/>
                <AnimatedCounter />
    </section>
  );
};

export default HeroActive;
