import { useEffect, useRef } from 'react';
import { FaRocket, FaArrowDown } from 'react-icons/fa';
import { animateText } from '../../../utils/animations';
import { SECTION_IDS } from '../../../utils/sectionIds';
import RocketAnimation from '../../../components/ui/RocketAnimation';
import { heroTexts } from '../../../utils/content/heroContent';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateText(subheadlineRef.current, { delay: 0.8 });

      gsap.from(ctaRef.current, { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        delay: 1.2,
        ease: "back.out"
      });

      gsap.to(".hero-planet", {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 z-10 mt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          <div className="order-2 md:order-1">
            <h1 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F9F9F9] mb-4">
              {heroTexts.headline}
            </h1>

            <p ref={subheadlineRef} className="font-inter text-xl md:text-2xl text-[#F9F9F9]/80 mb-8">
              {heroTexts.subheadline}
            </p>

            <button 
              ref={ctaRef}
              onClick={() => scrollToSection(SECTION_IDS.SOLUTION)}
              className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-3 px-8 rounded-full transition-all duration-300 font-poppins flex items-center space-x-2 text-lg shadow-lg hover:shadow-[#FFC857]/20"
            >
              <FaRocket /> <span>{heroTexts.ctaText}</span>
            </button>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <RocketAnimation />
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce"
        onClick={() => scrollToSection(SECTION_IDS.PROBLEM)}
      >
        <span className="text-[#FF4F87] mb-2 font-inter text-sm">{heroTexts.scrollHint}</span>
        <FaArrowDown className="text-[#FF4F87]" />
      </div>
    </div>
  );
};

export default HeroSection;
