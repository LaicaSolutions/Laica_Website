import {  useRef } from 'react';
// Ícones utilizados na seção
import { FaTabletAlt, FaLaptop } from 'react-icons/fa';

// Biblioteca de animações
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PlanetDecor from '../../../components/ui/PlanetDecor';
import DeviceWithAvatar from '../../../components/ui/DeviceWithAvatar';

// Registra o plugin de scroll
gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  // Referências para elementos DOM
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  //const statsRef = useRef(null);
  const leftPlanetRef = useRef(null);
  const rightPlanetRef = useRef(null);

 

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Planeta do lado esquerdo com círculos internos decorativos */}
     <PlanetDecor position="left" planetRef={leftPlanetRef} />
      
      {/* Planeta do lado direito com círculos internos decorativos */}
      <PlanetDecor position="right" planetRef={rightPlanetRef} />

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
         <DeviceWithAvatar />

        
        
      </div>
    </div>
  );
};

export default ProblemSection;
