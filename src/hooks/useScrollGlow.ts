import { useEffect } from 'react';

export const useScrollGlow = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.glow-on-scroll');
      const scrollY = window.scrollY;
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const elementVisible = 150;
        
        if (scrollY > elementTop - elementVisible) {
          element.classList.add('scrolled');
        } else {
          element.classList.remove('scrolled');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
