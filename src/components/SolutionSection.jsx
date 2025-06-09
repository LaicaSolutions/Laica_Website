import { useEffect, useRef } from 'react';
import { FaRocket, FaHeart, FaClock } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { redirect } from 'next/dist/server/api-utils';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
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
/*// Cards animation
      gsap.from(cardsRef.current.children, { 
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "back.out(1.7)"
      });*/
      
      
      
      // Nebula background animation
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
  }, []);
  

  const solutionCards = [
    {
      icon: <FaRocket className="text-5xl text-[#FFC857]" />,
      title: "Quick and simple activities",
      description: "No complex setup or long commitments. Just simple, effective ways to reconnect during your everyday routines."
    },
    {
      icon: <FaHeart className="text-5xl text-[#FFC857]" />,
      title: "Emotionally engaging and playful",
      description: "Activities designed to create moments of joy, wonder and connection between parents and children."
    },
    {
      icon: <FaClock className="text-5xl text-[#FFC857]" />,
      title: "Designed for real-life routines",
      description: "Seamlessly integrates into your existing family rhythm, turning ordinary moments into opportunities for connection."
    }
  ];

  return (
  <div 
    ref={sectionRef} 
    className="relative min-h-screen py-20 overflow-hidden"
  >
    {/* Nebula background */}
    <div className="nebula-bg absolute inset-0 bg-gradient-to-r from-[#4B3F72]/30 via-[#7FDBDA]/20 to-[#4B3F72]/30 bg-[length:200%_100%] opacity-50"></div>

    <div className="container mx-auto px-4 z-10">
      {/* Título e introdução */}
      <div className="text-center mb-12 ">
        <h2 
          ref={titleRef}
          className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-4"
        >
          Reconectando famílias, <span className="text-[#FF4F87]">um momento de cada vez.</span>
        </h2>
        <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
          A Laica oferece atividades simples e divertidas que se adaptam à sua vida diária, ajudando pais e filhos a se reconectarem além das telas de maneiras significativas.
        </p>
      </div>

      {/* Duas colunas: texto + GIF */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Coluna da esquerda */}
  <div className="flex flex-col  gap-6 md:items-start md:ml-5">
    <h3 className="font-baloo text-2xl md:text-3xl font-bold text-[#FFC857] mb-4 text-center md:text-left">
      Uma solução para Famílias com crianças +5 anos
    </h3>

    <p className="font-inter text-lg text-[#F9F9F9]/80 text-center md:text-left">
      <span className="font-bold">Crianças:</span> recebem desafios que incentivam a brincadeira e a exploração do mundo real — seja de forma autônoma ou ao lado da família.
    </p>

    <p className="font-inter text-lg text-[#F9F9F9]/80 text-center md:text-left">
      <span className="font-bold">Pais, mães e tutores:</span> recebem orientações de especialistas, recomendações de atividades de lazer próximas de casa e ferramentas práticas para acompanhar essa jornada.
    </p>

    {/* Botão para telas médias ou maiores */}
    <button
  onClick={() => scrollToSection('solution')}
  className="hidden md:flex ml-auto bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-3 px-8 rounded transition-all duration-300 font-poppins items-center text-lg"
>
  <FaRocket className="mr-2 text-xl" /> Decolar
</button>

  </div>

  {/* Coluna da direita com GIF */}
  <div className="flex flex-col items-center">
    <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-[#7FDBDA]/30 bg-[#0D1B2A]/40 backdrop-blur-md">
      <img
        src="/assets/images/laica_demo.gif"
        alt="Demonstração da Laica em ação"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Botão para telas pequenas (vem depois do GIF) */}
    <button
      onClick={() => scrollToSection('solution')}
      className="mt-6 px-8 py-4 bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold rounded transition-all duration-300 font-poppins flex items-center text-lg md:hidden"
    >
      <FaRocket className="mr-3 text-xl" /> Decolar
    </button>
  </div>
</div>







    </div>
  </div>
);


};

export default SolutionSection;