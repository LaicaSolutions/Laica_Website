import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const defaultQuestions = [
  "Se você pudesse ter qualquer superpoder, qual seria e por quê?",
  "Qual é a sua memória mais feliz?",
  "Se você pudesse viajar para qualquer lugar do universo, para onde iria?",
];

const Question = ({ questions = defaultQuestions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNavigation = (newIndex) => {
    // Garante que o novo índice está dentro dos limites do array
    if (newIndex >= 0 && newIndex < questions.length) {
      setIsFading(true); // Inicia a animação de "fade out"
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false); // Remove o "fade out" para a nova pergunta aparecer
      }, 150); // Tempo deve ser igual à duração da transição
    }
  };

  // Efeito para navegação com as setas do teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handleNavigation(currentIndex - 1);
      if (e.key === 'ArrowRight') handleNavigation(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions]); // Dependências para recriar o listener se necessário

  const hasQuestions = questions && questions.length > 0;

  return (
    <div className="font-baloo text-center p-6 rounded-2xl max-w-2xl mx-auto shadow-lg bg-gradient-to-br from-gray-700 via-gray-900 to-black border-2 border-blue-400/50 text-white flex flex-col justify-between min-h-[300px]">
      <div className="flex-grow flex items-center justify-center">
        {hasQuestions ? (
          <p className={`text-3xl font-semibold transition-opacity duration-150 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {questions[currentIndex]}
          </p>
        ) : (
          <p className="text-2xl">Nenhuma pergunta encontrada.</p>
        )}
      </div>

      {hasQuestions && (
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => handleNavigation(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Pergunta anterior"
          >
            <ArrowLeft className="h-8 w-8" />
          </button>

          <span className="text-lg font-mono">{currentIndex + 1} / {questions.length}</span>

          <button
            onClick={() => handleNavigation(currentIndex + 1)}
            disabled={currentIndex === questions.length - 1}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Próxima pergunta"
          >
            <ArrowRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;

