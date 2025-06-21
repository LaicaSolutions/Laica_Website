// src/components/ui/RocketAnimation.jsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { animateElement } from '../../utils/animations';

const RocketAnimation = () => {
  const rocketRef = useRef(null);

  useEffect(() => {
    animateElement(rocketRef.current, {
      y: -20,
      rotate: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div ref={rocketRef} className="relative">
      <div className="w-64 h-64 md:w-96 md:h-96 relative">
        <img 
          src="/assets/images/laica_spaceship.png"
          alt="Laica Spaceship"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default RocketAnimation;
