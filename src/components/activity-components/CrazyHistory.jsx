import React, { useState, useEffect, useMemo } from 'react';
import { usePausableTimer } from '../../hooks/usePausableTimer';
import { SharePrompt } from './SharePrompt';
import { Play, Pause, RefreshCw } from 'lucide-react';

// Lista de palavras para a história maluca
const crazyWords = [
  "Foguete", "Planeta", "Alienígena", "Estrela", "Robô", "Chocolate", "Dança",
  "Mistério", "Tesouro", "Castelo", "Dragão", "Mágico", "Segredo", "Pijama",
  "Aventura", "Espelho", "Sombra", "Risada", "Bolha", "Guitarra", "Unicórnio",
  "Pipoca", "Oceano", "Montanha", "Sussurro", "Bigode", "Nuvem", "Chapéu",
  "Gato", "Cachorro", "Pássaro", "Leão", "Macaco", "Sapo", "Borboleta",
  "Sorvete", "Pizza", "Bolo", "Biscoito", "Maçã", "Banana",
  "Carro", "Avião", "Barco", "Casa", "Lápis", "Livro", "Bola",
  "Praia", "Floresta", "Rio", "Arco-íris", "Vulcão",
  "Fada", "Bruxa", "Gigante", "Sereia", "Pirata", "Herói", "Vilão",
  "Correr", "Pular", "Cantar", "Sonhar", "Desenhar",
  "Sol", "Lua", "Trovão", "Relâmpago", "Amigo", "Família"
];

const shareText = {
      title : 'Fim da história!',
      description : 'Cada palavra, uma surpresa. Cada risada, uma memória!Compartilhe essa história maluca com outras famílias e inspire mais momentos criativos!',
      note : 'As melhores histórias podem aparecer na nossa Galeria Galáctica!',
      whatsappMessage : 'Acabamos de fazer a atividade "Perguntas da Tripulação" da Laica e foi muito divertido!',
      link: ''
  }

// 2. Função para ler o texto em voz alta
const speakWord = (text) => {
  if ('speechSynthesis' in window) {
    // Para qualquer fala pendente para não sobrepor
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Garante a pronúncia correta em português
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    console.error('Seu navegador não suporta a síntese de voz.');
  }
};


const CrazyStory = ({ activity }) => {
  const [currentWord, setCurrentWord] = useState('...');
  const [isFinished, setIsFinished] = useState(false);

  const {
    timeRemaining,
    isActive,
    isPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  } = usePausableTimer({
    initialTime: 300, // 5 minutos
    pauseInterval: 0,
    onFinish: () => setIsFinished(true),
  });

  // Efeito para trocar a palavra a cada 30 segundos
  useEffect(() => {
    if (isActive) {
      const elapsedTime = 300 - timeRemaining;
      if (elapsedTime > 0 && elapsedTime % 30 === 0) {
        const newWord = crazyWords[Math.floor(Math.random() * crazyWords.length)];
        setCurrentWord(newWord);
        speakWord(newWord);
      }
    }
  }, [timeRemaining, isActive]);

  const masterReset = () => {
    resetTimer();
    setIsFinished(false);
    setCurrentWord('...');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  if (isFinished) {
    return <SharePrompt {...shareText} />;
  }

  return (
    <div className="font-pixel text-center p-6 md:p-8 rounded-lg max-w-2xl mx-auto bg-black/50 border-4 border-pink-500 backdrop-blur-sm space-y-8">
      {/* Display da Palavra */}
      <div className="bg-black/30 border-2 border-cyan-400 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
        <p className="text-xl md:text-2xl text-cyan-400 uppercase tracking-widest [text-shadow:_0_0_8px_#00ffff]">
          {currentWord}
        </p>
      </div>
       

      
      {/* Timer */}
      <div>
        <p className="text-5xl sm:text-6xl md:text-7xl text-white/90">
          {formatTime(timeRemaining)}
        </p>
        <p className="text-sm md:text-base text-white/70 mt-2 h-6 tracking-widest">
          {isActive ? "CRIANDO HISTÓRIA..." : (isPaused ? "PAUSADO" : "PRONTOS?")}
        </p>
      </div>

      {/* Controles */}
      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        {!isActive && !isPaused && (
          <button onClick={startTimer} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-neon-cyan text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto">
            <Play className="h-5 w-5" /> Iniciar
          </button>
        )}

        {isActive && !isPaused && (
          <button onClick={pauseTimer} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-amber-400 text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto">
            <Pause className="h-5 w-5" /> Pausar
          </button>
        )}

        {isPaused && (
          <button onClick={resumeTimer} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-neon-cyan text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto">
            <Play className="h-5 w-5" /> Continuar
          </button>
        )}

        <button onClick={masterReset} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-neon-pink text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto">
          <RefreshCw className="h-5 w-5" /> Reiniciar
        </button>
      </div>
      

      
    </div>
  );
};

export default CrazyStory;
