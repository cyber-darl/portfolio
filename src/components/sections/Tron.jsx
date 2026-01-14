import React, { useState, useEffect, useRef } from 'react';
import './Tron.css';
import whiteTron from '../assets/white-tron.png';
import blackTron from '../assets/dark-tron.png'

const Tron = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [peelProgress, setPeelProgress] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  
  const image1Ref = useRef(null);
  const imageSectionRef = useRef(null);
  const lastScrollPosition = useRef(0);
  const animationFrameRef = useRef(null);

  const handleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const sectionTop = imageSectionRef.current?.offsetTop || 0;
      const scrollPastSectionTop = scrollPosition - sectionTop;
      
      // Detect scroll direction
      const direction = scrollPosition > lastScrollPosition.current ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollPosition.current = scrollPosition;
      
      // Calculate raw progress (0 to 1 over 100vh of the section)
      let rawProgress = scrollPastSectionTop / windowHeight;
      rawProgress = Math.max(0, Math.min(1, rawProgress));
      
      // Set target progress
      let targetProgress;
      if (direction === 'down') {
        targetProgress = rawProgress;
      } else {
        targetProgress = rawProgress;
      }
      
      // Smoothly animate to target progress
      const smoothing = 0.2;
      setPeelProgress(prev => {
        const newProgress = prev + (targetProgress - prev) * smoothing;
        return newProgress;
      });
      
      // Update progress bar
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollPercent(scrollPercent);
    });
  };

  useEffect(() => {
    // Apply the mask to image1 based on peelProgress
    if (image1Ref.current) {
      const cutLinePosition = peelProgress * 100;
      image1Ref.current.style.maskImage = `linear-gradient(to top, 
        transparent 0%, 
        transparent ${cutLinePosition}%, 
        black ${cutLinePosition}%, 
        black 100%)`;
      image1Ref.current.style.webkitMaskImage = `linear-gradient(to top, 
        transparent 0%, 
        transparent ${cutLinePosition}%, 
        black ${cutLinePosition}%, 
        black 100%)`;
    }
  }, [peelProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="tron-container">
    
      
    
      

      
     
      
      <section className="image-section" ref={imageSectionRef}>
        <div className="image-main-container">
          {/* Image 2 - Bottom layer */}
          <div className="image-layer image-2">
            <img 
              src={blackTron} 
              alt="Mountain Landscape" 
              className="full-width-image black-tron"
            />
            
          </div>
          
          {/* Image 1 - Top layer */}
          <div className="image-layer image-1" ref={image1Ref}>
            <img 
              src={whiteTron} 
              alt="white Tron" 
              className="full-width-image white-tron"
            />
           
           
          </div>
        </div>
      </section>
      

    </div>
  );
};

export default Tron;