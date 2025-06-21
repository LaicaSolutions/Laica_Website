import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSolutionAnimations } from '../hooks/useSolutionAnimations';

gsap.registerPlugin(ScrollTrigger);

const SolutionSection = () => {
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const navigate = useNavigate(); // <- Para redirecionar para "/pre-cadastro"
  useSolutionAnimations(sectionRef, titleRef);


  return (
    <div ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Nebuloso */}
      <div className="nebula-bg absolute inset-0 bg-gradient-to-r from-[#4B3F72]/30 via-[#7FDBDA]/20 to-[#4B3F72]/30 bg-[length:200%_100%] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10">
        {/* Título e descrição */}
        <div className="text-center mb-12">
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

        {/* Grid de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Texto e botão (Coluna Esquerda) */}
          <div className="flex flex-col gap-6 md:items-start md:ml-5">
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
              onClick={() => navigate('/pre-cadastro')}
              className="hidden md:flex ml-auto bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-3 px-8 rounded transition-all duration-300 font-poppins items-center text-lg"
            >
              <FaRocket className="mr-2 text-xl" /> Decolar
            </button>
          </div>

          {/* GIF e botão mobile (Coluna Direita) */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg border border-[#7FDBDA]/30 bg-[#0D1B2A]/40 backdrop-blur-md">
              <img
                src="/assets/images/laica_demo.gif"
                alt="Demonstração da Laica em ação"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Botão para mobile */}
            <button
              onClick={() => navigate('/pre-cadastro')}
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
