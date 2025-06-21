import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useProblemAnimations = (sectionRef, titleRef, leftPlanetRef, rightPlanetRef) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 1,
      });

      gsap.to(leftPlanetRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(rightPlanetRef.current, {
        rotation: -360,
        duration: 100,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, titleRef, leftPlanetRef, rightPlanetRef]);
};
