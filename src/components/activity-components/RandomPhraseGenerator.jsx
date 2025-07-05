import React, { useState } from 'react';
import { Button } from '../ui/button';
import { RefreshCw } from 'lucide-react';

const phrases = [
  "Nas luas de Ganimedes, a poeira estelar canta.",
  "Um buraco negro não é um fim, mas um talvez.",
  "A gravidade é um hábito difícil de largar.",
  "O silêncio do espaço é a mais alta das músicas.",
  "Perdido em translação.",
];

const RandomPhraseGenerator = () => {
  const [phrase, setPhrase] = useState(phrases[0]);

  const generatePhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  };

  return (
    <div className="w-full p-6 bg-black/20 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-4">
      <p className="text-white/90 text-xl italic text-center">"{phrase}"</p>
      <Button onClick={generatePhrase} variant="outline" className="space-button bg-transparent hover:bg-primary/20">
        <RefreshCw className="mr-2 h-4 w-4" />
        Gerar Nova Frase
      </Button>
    </div>
  );
};

export default RandomPhraseGenerator;