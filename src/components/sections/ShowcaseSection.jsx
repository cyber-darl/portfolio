'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
    ];
    
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  // Shared classes for all project cards to keep things clean
  const cardStyles = 'w-full sm:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)] rounded-none group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer flex flex-col';

  return (
    <>
      <div className='mt-20'>
        <TitleHeader
          title='My Works'
          subtitle='projects I have worked on'
        />
      </div>
      
      {/* Instead of app-showcase grid, we use flex + flex-wrap + justify-center 
        This perfectly centers the bottom row automatically!
      */}
      <section
        id='work'
        className='w-full mt-2 px-5 md:px-20 py-10 md:py-20 flex flex-wrap justify-center items-stretch gap-x-6 gap-y-16 mx-auto'
        ref={sectionRef}
      >
        {/* Project 1 */}
        <div className={cardStyles} ref={project1Ref}>
          <div className='image-wrapper bg-[#ffe7eb] overflow-hidden rounded-none'>
            <img
              src='/images/stay-healthy.png'
              alt='stayhealthy'
              className='transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover'
            />
          </div>
          <div className='text-content mt-4 flex flex-col flex-grow justify-between'>
            <div>
              <h2 className="text-xl md:text-xl font-semibold">StayHealthy Inc.</h2>
              <p className='text-white-50 text-[16px] max-w-[450px] mt-2'>
               An app to book an appointment with Medical practitioners. Leave reviews, edit your profile, check medical reports and more!
              </p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2 mt-4'>
              <a
                href='https://blank-react.vercel.app/'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/blank-react'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className={cardStyles} ref={project2Ref}>
          <div className='image-wrapper overflow-hidden rounded-none'>
            <img
              src='/images/drip-with-souza.png'
              alt='drip-with-souza'
              className='transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover'
            />
          </div>
          <div className='text-content mt-4 flex flex-col flex-grow justify-between'>
            <div>
              <h2 className="text-xl md:text-xl font-semibold">Drip With Souza</h2>
              <p className='text-white-50 text-[16px] max-w-[450px] mt-2'>
                Created this e-commerce website, for an elite fashion brand. Shop unique pieces that make you stand out.
              </p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2 mt-4'>
              <a
                href='https://drip-with-souza-2v7u.vercel.app/'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/Drip_with_Souza'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className={cardStyles} ref={project3Ref}>
          <div className='image-wrapper overflow-hidden rounded-none'>
            <img
              src='/images/Vanguard-Logix.png'
              alt='Vanguard Logix'
              className='transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover'
            />
          </div>
          <div className='text-content mt-4 flex flex-col flex-grow justify-between'>
            <div>
              <h2 className="text-xl md:text-xl font-semibold">VL Logistics Company</h2>
              <p className='text-white-50 text-[16px] max-w-[450px] mt-2'>
               Vanguard Logix is a logistics and supply chain agency helping brands scale their operations.
              </p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2 mt-4'>
              <a
                href='https://vv-website-five.vercel.app/'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/Vanguard-Logix'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className={cardStyles} ref={project4Ref}>
          <div className='image-wrapper overflow-hidden rounded-none'>
            <img
              src='/images/budget-app.png'
              alt='budget app'
              className='transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover'
            />
          </div>
          <div className='text-content mt-4 flex flex-col flex-grow justify-between'>
            <div>
              <h2 className="text-xl md:text-xl font-semibold">Redux Budget App</h2>
              <p className='text-white-50 text-[16px] max-w-[450px] mt-2'>
                A simple but effective budget app to manage income and expenditure from different departments in a company. 
              </p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2 mt-4'>
              <a
                href='https://ejtos-react-budget-app-five.vercel.app/'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/ejtos-react_budget_app'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className={cardStyles} ref={project5Ref}>
          <div className='image-wrapper overflow-hidden rounded-none'>
            <img
              src='/images/jiggybot.png'
              alt='jiggybot'
              className='transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover'
            />
          </div>
          <div className='text-content mt-4 flex flex-col flex-grow justify-between'>
            <div>
              <h2 className="text-xl md:text-xl font-semibold">Jiggy Bot</h2>
              <p className='text-white-50 text-[16px] max-w-[450px] mt-2'>
              A simple telegram bot that interacts with wallets on TON. This project is from the        <a href='https://stepik.org/course/176754/promo'  className="underline"
              >
          Stepik Ton and Telegram Blockchain Course. 
              </a>
              </p>
            </div>
            <div className='flex flex-row justify-between items-center gap-2 mt-4'>
              <a
                href='https://t.me/cyber_darl_jiggy_bot'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/soft'
                className='text-white-50 hover:text-white transition-colors text-sm'
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseSection;