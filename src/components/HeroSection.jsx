// Importações de hooks e bibliotecas
import { useEffect, useRef } from 'react';
import { FaRocket, FaArrowDown } from 'react-icons/fa';
import { animateElement, animateText } from '../utils/animations'; // Funções de animação personalizadas
import gsap from 'gsap';

const HeroSection = () => {
  // Refs para acessar elementos do DOM
  const heroRef = useRef(null);
  const rocketRef = useRef(null);
  const headlineRef = useRef(null);
  const headlineRef2 = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Contexto do GSAP para garantir que as animações sejam isoladas deste componente
    const ctx = gsap.context(() => {
      // Animação dos textos principais
      //animateText  (headlineRef.current, { delay: 0.5 });
      //animateText  (headlineRef2.current, { delay: 0.6 });
      animateText(subheadlineRef.current, { delay: 0.8 });

      // Animação contínua do foguete (flutuação e rotação)
      animateElement(rocketRef.current, {
        y: -20,
        rotate: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Animação de entrada para o botão "Join the mission"
      gsap.from(ctaRef.current, { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        delay: 1.2,
        ease: "back.out"
      });

      // Efeito parallax no fundo com a classe .hero-planet
      gsap.to(".hero-planet", {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef); // Vincula ao contexto do elemento heroRef

    // Cleanup para remover animações ao desmontar
    return () => ctx.revert();
  }, []);

  // Função para rolar suavemente até a seção de solução
  const scrollToSolution = () => {
    const solutionElement = document.getElementById('solution');
    if (solutionElement) {
      window.scrollTo({
        top: solutionElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Função para rolar até a próxima seção (problema)
  const scrollToNextSection = () => {
    const problemElement = document.getElementById('problem');
    if (problemElement) {
      window.scrollTo({
        top: problemElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Container principal da seção */}

      <div className="container mx-auto px-4 lg:px-8 z-10 mt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Bloco de texto */}
          <div className="order-2 md:order-1">
           <h1 
              
              className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F9F9F9] mb-4"
            >
              A missão de reconectar famílias,direto do planeta terra
              
            </h1>
       
            <p 
              ref={subheadlineRef}
              className="font-inter text-xl md:text-2xl text-[#F9F9F9]/80 mb-8"
            >
              Laica torna pequenas atividades em poderosos momentos de conexão familiar.
            </p>

            {/* Botão CTA */}
            <button 
              ref={ctaRef}
              onClick={scrollToSolution}
              className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-3 px-8 rounded-full transition-all duration-300 font-poppins flex items-center space-x-2 text-lg shadow-lg hover:shadow-[#FFC857]/20"
            >
              <FaRocket /> <span>Join the mission</span>
            </button>
          </div>

          {/* Imagem do foguete */}
          <div className="order-1 md:order-2 flex justify-center relative">
            <div ref={rocketRef} className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 relative">
                <img 
                  src="/assets/images/laica_spaceship.png"
                  alt="Laica Spaceship"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de rolagem para baixo */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <span className="text-[#FF4F87] mb-2 font-inter text-sm">Explore Mais</span>
        <FaArrowDown className="text-[#FF4F87]" />
      </div>
    </div>
  );
};

export default HeroSection;
