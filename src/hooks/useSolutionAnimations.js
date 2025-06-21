import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSolutionAnimations = (sectionRef, titleRef) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, { 
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none none"
        },
        duration: 1
      });

      // Animação de parallax no background
      gsap.to(".nebula-bg", {
        backgroundPosition: "100% 50%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, titleRef]);
};
