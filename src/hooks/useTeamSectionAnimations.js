import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useTeamSectionAnimations = (sectionRef, titleRef, teamRef) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1
      });

      // Animação de entrada dos cards
      gsap.from(teamRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Animação flutuante dos astronautas
      teamRef.current.childNodes.forEach((child, index) => {
        gsap.to(child, {
          y: `-=${10 + index * 5}`,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, titleRef, teamRef]);
};
