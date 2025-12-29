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
              src='/images/quickstayy.png'
              alt='ryde'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Quickstay </h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              Developed a comprehensive hotel management system for booking and
              reservation handling.
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://quickstayy-hotel.netlify.app/'
                className='text-white-50 text-sm '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/kpeale/hotelApp'
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
              src='/images/project-spotify.png'
              alt='ryde'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Spotify Clone</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              Created a fully functional music streaming application using local
              data.
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://spotify-kpeale.netlify.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/kpeale/spotify-clone'
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
              src='/images/project-sleep.png'
              alt='ryde'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Sleep Tracker</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              Built a comprehensive health monitoring application that tracks
              user sleep patterns. .
            </p>

            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://sleep-trackerr.netlify.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/kpeale/sleep-tracker'
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
              src='/images/project-audiophile.png'
              alt='ryde'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Audiophile</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              Built a modern e-commerce platform specializing in premium
              electronic gadgets and audio equipment
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://audiophile-storee.netlify.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/kpeale/audiophile-store'
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
              src='/images/project-cv.png'
              alt='ryde'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>CV Analyser</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              Built a web application that analyzes CVs for job applications,
              helping users optimize their resumes.
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://cv-analyser-nu.vercel.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>
              <a
                href='https://github.com/kpeale/CVAnalyser'
                className='text-white-50 text-sm  '
              >
                View on Github
              </a>
            </div>
          </div>
        </div>

        <div
          className='rounded-sm'
          ref={project6Ref}
        >
          <div className='image-wrapper'>
            <img
              src='/images/apple.png'
              alt='ryde'
            />
          </div>
          <div className='text-content mt-2'>
            <h2>Apple’s Macbook Clone</h2>
            <p className='text-white-50 text-[16px] max-w-[450px] '>
              I cloned the popular apple website using REACT, Three.JS and GSAP
              for mind blowing 3d animations
            </p>
            <div className='flex flex-row justify-between items-center gap-2 mt-2'>
              <a
                href='https://apple-clone-lac-gamma.vercel.app/'
                className='text-white-50 text-sm  '
              >
                View Live Project
              </a>

              <a
                href='https://github.com/kpeale/apple'
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
