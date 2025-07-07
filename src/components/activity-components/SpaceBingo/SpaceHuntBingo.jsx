import React, { useState, useEffect } from 'react';
import { SharePrompt } from '../SharePrompt';

// Dados para os itens do bingo baseados no local
// Usamos emojis como placeholders para as imagens
const bingoData = {
  casa: [
    { name: 'Sofá', image: '🛋️' }, { name: 'TV', image: '📺' },
    { name: 'Cama', image: '🛏️' }, { name: 'Geladeira', image: '🧊' },
    { name: 'Mesa', image: '🪑' }, { name: 'Cadeira', image: '🪑' },
    { name: 'Livro', image: '📖' }, { name: 'Janela', image: '🖼️' },
    { name: 'Planta', image: '🪴' },
  ],
  restaurante: [
    { name: 'Mesa', image: '🪑' }, { name: 'Cadeira', image: '🪑' },
    { name: 'Garfo', image: '🍴' }, { name: 'Prato', image: '🍽️' },
    { name: 'Copo', image: '🥤' }, { name: 'Cardápio', image: '📜' },
    { name: 'Comida', image: '🍕' }, { name: 'Garçom', image: '🧑‍🍳' },
    { name: 'Guardanapo', image: '🧻' },
  ],
  
  parque: [
    { name: 'Árvore', image: '🌳' }, { name: 'Banco', image: '🪑' },
    { name: 'Escorregador', image: '🛝' }, { name: 'Balanço', image: '🎈' },
    { name: 'Bola', image: '⚽' }, { name: 'Pássaro', image: '🐦' },
    { name: 'Flor', image: '🌸' }, { name: 'Fonte', image: '⛲' },
    { name: 'Bicicleta', image: '🚲' },
  ],
};

const locationOptions = [
  { value: 'casa', label: '🏠' },
  { value: 'restaurante', label: '🍽️' },
 
  { value: 'parque', label: '🌳' },
];

// Função para embaralhar o array e garantir um bingo diferente a cada vez
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const SpaceHuntBingo = () => {
  const [location, setLocation] = useState('');
  const [bingoItems, setBingoItems] = useState([]);
  const [foundItems, setFoundItems] = useState(new Set());
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (location && bingoData[location]) {
      // Embaralha e pega 9 itens para uma grade 3x3
      const items = shuffleArray(bingoData[location]).slice(0, 9);
      setBingoItems(items);
      setFoundItems(new Set()); // Reseta os itens encontrados ao mudar de local
      setTime(0);
      setIsComplete(false);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location]);

  // Efeito para rodar o cronômetro
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  // Efeito para verificar a conclusão do bingo
  useEffect(() => {
    if (foundItems.size === 9 && bingoItems.length > 0) {
      setIsActive(false);
      setIsComplete(true);
    }
  }, [foundItems, bingoItems.length]);

  const handleItemClick = (index) => {
    if (isComplete) return; // Impede a alteração após a conclusão
    setFoundItems(prevFoundItems => {
      const newFoundItems = new Set(prevFoundItems);
      if (newFoundItems.has(index)) {
        newFoundItems.delete(index); // Permite desmarcar
      } else {
        newFoundItems.add(index); // Marca como encontrado
      }
      return newFoundItems;
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="font-pixel text-center p-6 md:p-8 rounded-lg max-w-2xl mx-auto bg-black/50 border-4 border-pink-500 backdrop-blur-sm">
      
      <div className="my-5 text-white">
        <h2 className="text-xl uppercase tracking-widest text-cyan-400 mb-6">Escolha o Local da Caça</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {locationOptions.map((option) => (
            <button
              key={option.value}
              className={`w-20 h-20 text-3xl rounded-lg border-2 cursor-pointer transition-all duration-150 
                ${location === option.value
                  ? 'bg-cyan-400 text-black border-black shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.5)]'
                  : 'bg-gray-700 text-white/80 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                }`}
              onClick={() => setLocation(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {location && (
        <div className="mt-8 pt-6 border-t-4 border-dashed border-pink-500/50 space-y-6">
          {isComplete ? (
            <SharePrompt 
              title="CAÇA CONCLUÍDA!"
              description={`${formatTime(time)} foi o seu tempo! Compartilhe essa conquista!`}
              whatsappMessage={`Concluímos a Caça Espacial da Laica em ${formatTime(time)}! Foi demais!`}
              note=""
            />
          ) : (
            <div className="text-white text-center">
              <p className="text-lg uppercase tracking-widest text-white/80">TEMPO</p>
              <p className="text-6xl text-neon-cyan">{formatTime(time)}</p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-3">
            {bingoItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative border-2 border-cyan-400 rounded-lg p-2 bg-black/30 cursor-pointer transition-transform duration-200 flex flex-col items-center justify-center h-28 md:h-32 select-none ${!isComplete && 'hover:-translate-y-1'}`} 
                onClick={() => handleItemClick(index)}
              >
                <div className="text-5xl">{item.image}</div>
                <div className="mt-2 text-[10px] md:text-xs leading-tight text-white/90 text-center break-words">{item.name}</div>
                {foundItems.has(index) && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-md backdrop-blur-sm">
                    <span className="text-pink-500 text-7xl font-bold leading-none [text-shadow:0_0_8px_#ff00ff]">X</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceHuntBingo;