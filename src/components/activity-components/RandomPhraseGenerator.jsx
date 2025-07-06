import React, { useState } from 'react';
import { Button } from '../ui/button';
import { RefreshCw } from 'lucide-react';

const defaultPhrases = [
  "Nas luas de Ganimedes, a poeira estelar canta.",
  "Um buraco negro não é um fim, mas um talvez.",
  "A gravidade é um hábito difícil de largar.",
  "O silêncio do espaço é a mais alta das músicas.",
  "Perdido em translação.",
];

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
    <div className="w-full p-6 bg-black/20 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-4">
      <p className="text-white/90 text-xl italic text-center">"{phrase}"</p>
      <Button onClick={generatePhrase} variant="outline" className="space-button bg-transparent hover:bg-primary/20" disabled={!phrases || phrases.length <= 1}>
        <RefreshCw className="mr-2 h-4 w-4" />
        Gerar Nova Frase
      </Button>
    </div>
  );
};

export default RandomPhraseGenerator;