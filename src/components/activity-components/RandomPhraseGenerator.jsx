import React, { useState } from 'react';
import { RefreshCw, Volume2 } from 'lucide-react';

const defaultPhrases = [
  "Nas luas de Ganimedes, a poeira estelar canta.",
  "Um buraco negro não é um fim, mas um talvez.",
  "A gravidade é um hábito difícil de largar.",
  "O silêncio do espaço é a mais alta das músicas.",
  "Perdido em translação.",
];

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

const RandomPhraseGenerator = ({ phrases = defaultPhrases }) => {
  // Garante que temos uma frase inicial, mesmo se um array vazio for passado.
  const [phrase, setPhrase] = useState(phrases[0] || "Nenhuma frase disponível.");

  const generatePhrase = () => {
    // Garante que o array de frases existe e tem itens.
    if (phrases && phrases.length > 0) {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setPhrase(phrases[randomIndex]);
    }
  };

  return (
    <div className="font-pixel w-full p-6 md:p-8 bg-black/50 border-4  backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-6">
      {/* 3. Adicionar o ícone de som */}
      <div 
        className="absolute top-2 right-2 text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          speakWord(phrase);
          
        }}
      >
        <Volume2 size={30} />
      </div>
      <p className=" text-lg md:text-xl text-center leading-relaxed ">
        "{phrase}"
      </p>
      <button
        onClick={generatePhrase}
        className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[4px_4px_0px_0px_#fff]"
        disabled={!phrases || phrases.length <= 1}
      >
        <RefreshCw className="h-4 w-4" />
        Nova Frase
      </button>
    </div>
  );
};

export default RandomPhraseGenerator;