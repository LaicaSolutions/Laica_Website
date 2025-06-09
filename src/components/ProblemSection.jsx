import { useEffect, useRef } from 'react';
// Ícones utilizados na seção
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaGamepad } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
// Função personalizada para animações
import { animateElement } from '../utils/animations';
// Biblioteca de animações
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin de scroll
gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  // Referências para elementos DOM
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  //const statsRef = useRef(null);
  const leftPlanetRef = useRef(null);
  const rightPlanetRef = useRef(null);
/* useEffect(() => {
    // gsap.context garante limpeza automática ao desmontar
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.from(titleRef.current, { 
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current, // ativa quando a seção entra na tela
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1
      });

      // Animação dos cards de estatísticas
      gsap.from(statsRef.current.children, { 
        opacity: 0,
        y: 50,
        stagger: 0.2, // atraso entre os elementos
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "back.out(1.7)" // animação mais suave e saltada
      });

      // Animação contínua dos planetas em rotação
      animateElement(leftPlanetRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1, // infinito
        ease: "none"
      });

      animateElement(rightPlanetRef.current, {
        rotation: -360,
        duration: 100,
        repeat: -1,
        ease: "none"
      });
      
    }, sectionRef); // escopo de animação limitado à seção

    return () => ctx.revert(); // limpa animações ao desmontar
  }, []);*/
 

  // Lista de estatísticas com ícones, valores e descrições
  const stats = [
    {
      icon: <FaMobileAlt className="text-4xl text-[#FF4F87] mb-4" />,
      value: "73%",
      label: "of parents are concerned about their children's screen time"
    },
    {
      icon: <BsFillClockFill className="text-4xl text-[#FF4F87] mb-4" />,
      value: "4.4 hrs",
      label: "average daily screen time for children aged 8-12"
    },
    {
      icon: <FaTabletAlt className="text-4xl text-[#FF4F87] mb-4" />,
      value: "87%",
      label: "of families report devices disrupt family time regularly"
    },
    {
      icon: <FaGamepad className="text-4xl text-[#FF4F87] mb-4" />,
      value: "58%",
      label: "of parents struggle to limit their own device usage"
    }
  ];

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Planeta do lado esquerdo com círculos internos decorativos */}
      <div 
        ref={leftPlanetRef} 
        className="absolute left-[-15%] top-[10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-[#4B3F72]/30 to-transparent"
      >
        <div className="absolute w-[20%] h-[20%] rounded-full bg-[#4B3F72]/40 top-[15%] left-[20%]"></div>
        <div className="absolute w-[10%] h-[10%] rounded-full bg-[#4B3F72]/40 bottom-[30%] right-[25%]"></div>
      </div>
      
      {/* Planeta do lado direito com círculos internos decorativos */}
      <div 
        ref={rightPlanetRef}
        className="absolute right-[-20%] bottom-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-[#4B3F72]/40 to-transparent"
      >
        <div className="absolute w-[15%] h-[15%] rounded-full bg-[#4B3F72]/40 top-[25%] right-[30%]"></div>
        <div className="absolute w-[25%] h-[25%] rounded-full bg-[#4B3F72]/40 bottom-[20%] left-[20%]"></div>
      </div>

      {/* Conteúdo central da seção */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          {/* Título animado */}
          <h2 
            ref={titleRef}
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            <span className="text-[#FF4F87]">Algo</span> está fora de órbita...
          </h2>

          {/* Parágrafo introdutório */}
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Em nosso mundo cada vez mais digital, as famílias estão se distanciando. Apesar de viverem sob o mesmo teto, muitos pais e filhos se encontram em planetas diferentes, absortos em suas próprias telas.
          </p>
        </div>

        {/* Ilustração central com dispositivos e avatares */}
        <div className="relative mb-16 flex justify-center">
          <div className="w-full max-w-4xl relative">
            <div className="relative h-64 md:h-80">

              {/* Ícone de tablet com "criança" ao lado */}
              <div className="absolute left-0 top-0 w-24 h-24 md:w-32 md:h-32">
                <div className="w-full h-full rounded-full bg-[#4B3F72]/50 flex items-center justify-center relative overflow-hidden">
                  <div className="w-[90%] h-[90%] rounded-full bg-[#4B3F72]/70 flex items-center justify-center">
                    <FaTabletAlt className="text-[#F9F9F9] text-2xl md:text-3xl" />
                  </div>
                  <div className="absolute top-[10%] right-[10%] w-[20%] h-[20%] rounded-full bg-[#F9F9F9]/20"></div>
                </div>
                <div className="absolute top-[60%] left-[110%] w-16 h-16 md:w-20 md:h-20">
                  <div className="w-full h-full rounded-full bg-[#0D1B2A] border-2 border-[#7fdbda]/30 flex items-center justify-center">
                    <img 
                      src="/assets/images/kid_avatar.jpg" 
                      alt="Child absorbed in device" 
                      className="w-[80%] h-[80%] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Ícone de laptop com "pai/mãe" ao lado */}
              <div className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32">
                <div className="w-full h-full rounded-full bg-[#4B3F72]/50 flex items-center justify-center relative overflow-hidden">
                  <div className="w-[90%] h-[90%] rounded-full bg-[#4B3F72]/70 flex items-center justify-center">
                    <FaLaptop className="text-[#F9F9F9] text-2xl md:text-3xl" />
                  </div>
                  <div className="absolute top-[10%] right-[10%] w-[20%] h-[20%] rounded-full bg-[#F9F9F9]/20"></div>
                </div>
                <div className="absolute top-[5%] right-[110%] w-16 h-16 md:w-20 md:h-20">
                  <div className="w-full h-full rounded-full bg-[#0D1B2A] border-2 border-[#7fdbda]/30 flex items-center justify-center">
                    <img 
                      src="/assets/images/parent_avatar.jpg" 
                      alt="Parent absorbed in device" 
                      className="w-[80%] h-[80%] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Linha pontilhada simbolizando desconexão */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-0 border-t-2 border-dashed border-[#FFFFFF]/30"></div>
            </div>
          </div>
        </div>

        {/* Cards com dados estatísticos */}
        {/* Container para os cards estatísticos
        
        <div ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#0D1B2A]/50 backdrop-blur-sm border border-[#4B3F72]/30 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#FF4F87]/50 transition-all duration-300 hover:transform hover:translateY(-5px)"
            >
              {stat.icon}
              <h3 className="font-baloo text-3xl font-bold text-[#FFC857] mb-2">{stat.value}</h3>
              <p className="font-inter text-[#F9F9F9]/80">{stat.label}</p>
            </div>
          ))}
        </div>
        
        
        */}
        
      </div>
    </div>
  );
};

export default ProblemSection;
