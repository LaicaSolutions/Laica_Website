import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (location && bingoData[location]) {
      // Embaralha e pega 9 itens para uma grade 3x3
      const items = shuffleArray(bingoData[location]).slice(0, 9);
      setBingoItems(items);
      setFoundItems(new Set()); // Reseta os itens encontrados ao mudar de local
    }
  }, [location]);

  const handleItemClick = (index) => {
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

  return (
    <div className="font-baloo text-center  rounded-2xl max-w-lg mx-auto shadow-lg ">
      
      <div className="my-5">
       
        <div className="flex flex-wrap items-center justify-center gap-4">
          {locationOptions.map((option) => (
            <button
              key={option.value}
              className={`py-4 px-5 text-3xl rounded-xl border-2 cursor-pointer transition-all duration-300 font-bold 
                ${location === option.value
                  ? 'bg-blue-600 text-white border-blue-700 shadow-inner'
                  : 'bg-white text-blue-900 border-blue-300 hover:bg-cyan-50 hover:-translate-y-1 hover:shadow-md'
                }`}
              onClick={() => setLocation(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {location && (
        <div className="mt-8 border-t-2 border-dashed border-blue-200 pt-5">
         
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            {bingoItems.map((item, index) => (
              <div key={index} className="relative border-2 border-blue-300 rounded-xl p-4 bg-white cursor-pointer transition-all duration-200 flex flex-col items-center justify-center h-32 select-none hover:scale-105 hover:shadow-lg" onClick={() => handleItemClick(index)}>
                <div className="text-5xl">{item.image}</div>
                <div className="mt-2.5 text-base text-gray-800">{item.name}</div>
                {foundItems.has(index) && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-lg">
                    <span className="text-red-500 text-7xl font-bold leading-none [text-shadow:2px_2px_4px_rgba(0,0,0,0.2)]">X</span>
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