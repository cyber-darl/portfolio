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
  const project6Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
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
  return (
    <>
      <div className='mt-20'>
        <TitleHeader
          title='My Works'
          subtitle='projects I have worked on'
        />
      </div>
      <section
        id='work'
        className='app-showcase'
        ref={sectionRef}
      >
        <div
          className='rounded-sm'
          ref={project1Ref}
        >
          <div className='image-wrapper bg-[#ffe7eb]'>
            <img
              src='/images/stay-healthy.png'
              alt='stayhealthy'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>StayHealthy Inc.</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
             An app to book an appointment with Medical practitioners. Leave reviews, edit your profile, check medical reports and more!
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://blank-react.vercel.app/'
                className='text-white-50 text-sm '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/blank-react'
                className='text-white-50 text-sm  '
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project2Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/drip-with-souza.png'
              alt='drip-with-souza'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Drip With Souza
            </h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              Created this e-commerce website, for an elite fashion brand. Shop unique pieces that make you stand out.
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://drip-with-souza-2v7u.vercel.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/Drip_with_Souza'
                className='text-white-50 text-sm  '
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project3Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/Vanguard-Logix.png'
              alt='Vanguard Logix'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>VL Logistics Company</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
             Vanguard Logix is a logistics and supply chain agency helping brands scale their operations.
            </p>

            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://vv-website-five.vercel.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/Vanguard-Logix'
                className='text-white-50 text-sm  '
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project4Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/budget-app.png'
              alt='budget app'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>A Budget App</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              A simple but effective budget app to manage income and expenditure from different departments in a company. 
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://ejtos-react-budget-app-five.vercel.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/ejtos-react_budget_app'
                className='text-white-50 text-sm  '
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project5Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/jiggybot.png'
              alt='jiggybot'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Jiggy Bot</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
            A simple telegram bot that interacts with wallets on TON. This project is from the Stepik Ton and Telegram Blockchain Course. 
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://t.me/cyber_darl_jiggy_bot'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/cyber-darl/soft'
                className='text-white-50 text-sm  '
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
