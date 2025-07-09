import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Array com os links dos quebra-cabeças.
// Você pode substituir por uma prop se os links vierem do seu dataset de atividades.
const puzzleUrls = [
  'https://www.jigsawplanet.com/?rc=play&pid=2a68cbe85413&view=iframe&bgcolor=0x131b26', // planeta instrumento
  'https://www.jigsawplanet.com/?rc=play&pid=15c867318204&view=iframe&bgcolor=0x131b26', // floresta cristal
  'https://www.jigsawplanet.com/?rc=play&pid=2d713b92c241&view=iframe&bgcolor=0x131b26', // chuva cometa
  'https://www.jigsawplanet.com/?rc=play&pid=1a423d9a8f5b&view=iframe&bgcolor=0x131b26', // corrida interstellar
];

const PuzzleCanvas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? puzzleUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === puzzleUrls.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full flex flex-col items-center p-4 gap-4">
      <iframe
        key={currentIndex} // A chave força o iframe a recarregar quando o src muda
        src={puzzleUrls[currentIndex]}
        style={{ width: '100%', maxWidth: '90vw', height: '600px', border: 'none' }}
        allowFullScreen
        title={`Quebra-cabeça da LAICA ${currentIndex + 1}`} // Título dinâmico para acessibilidade
      ></iframe>
      <div className="flex items-center justify-center gap-8 text-white mt-4">
        <button onClick={goToPrevious} className="p-3 bg-[#FF4F87] rounded-full hover:bg-[#FF4F87]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D1B2A] focus:ring-white">
          <FaArrowLeft />
        </button>
        <span className="font-bold text-lg font-inter">
          {currentIndex + 1} / {puzzleUrls.length}
        </span>
        <button onClick={goToNext} className="p-3 bg-[#FF4F87] rounded-full hover:bg-[#FF4F87]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D1B2A] focus:ring-white">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PuzzleCanvas;

