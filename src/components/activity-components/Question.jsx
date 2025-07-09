import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SharePrompt } from './SharePrompt';

const defaultQuestions = [
  "Se você pudesse ter qualquer superpoder, qual seria e por quê?",
  "Qual é a sua memória mais feliz?",
  "Se você pudesse viajar para qualquer lugar do universo, para onde iria?",
];

const Question = ({ questions = defaultQuestions, sharePrompt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleNavigation = (newIndex) => {
    // Se o usuário clicar em "próximo" na última pergunta, finaliza.
    if (newIndex >= questions.length) {
      setIsFading(true);
      setTimeout(() => {
        setIsFinished(true);
      }, 150);
      return;
    }

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

  // Quando as perguntas terminarem, mostra o componente de compartilhamento.
  if (isFinished) {
    return <SharePrompt {...sharePrompt} />;
  }

  return (
    <div className="font-pixel text-center p-6 md:p-8 rounded-lg max-w-2xl mx-auto bg-black/50 border-4 border-cyan-400 backdrop-blur-sm text-white flex flex-col justify-between min-h-[300px]">
      <div className="flex-grow flex items-center justify-center">
        {hasQuestions ? (
          <p className={`text-xl md:text-2xl leading-relaxed transition-opacity duration-150 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {questions[currentIndex]}
          </p>
        ) : (
          <p className="text-2xl uppercase">Nenhuma pergunta encontrada.</p>
        )}
      </div>

      {hasQuestions && (
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => handleNavigation(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="h-12 w-12 flex items-center justify-center bg-pink-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_#fff] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[2px_2px_0px_0px_#fff]"
            aria-label="Pergunta anterior"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <span className="text-lg text-white/80 tracking-widest">{currentIndex + 1} / {questions.length + 1}</span>

          <button
            onClick={() => handleNavigation(currentIndex + 1)}
            className="h-12 w-12 flex items-center justify-center bg-pink-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_#fff] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[2px_2px_0px_0px_#fff]"
            aria-label="Próxima pergunta"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
