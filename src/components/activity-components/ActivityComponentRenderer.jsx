import React from 'react';

// 1. Importe todos os componentes de atividade que você criar.
import DrawingCanvas from './DrawingCanvas';
import RandomPhraseGenerator from './RandomPhraseGenerator';
import YouTubePlaylist from './YouTubePlaylist';
import SpaceHuntBingo from './SpaceBingo/SpaceHuntBingo';

// 2. Crie o mapeamento: a chave é o `componentType` do seu dataset, o valor é o componente importado.
const componentMap = {
  drawing: DrawingCanvas,
  phrase: RandomPhraseGenerator,
  video: YouTubePlaylist,
  spaceHunt: SpaceHuntBingo,
  // Adicione outros tipos de componentes aqui conforme for criando
};

// 3. O componente Renderer que seleciona e renderiza o componente correto.
const ActivityComponentRenderer = ({ componentType, ...props }) => {
  // Busca o componente no mapa.
  const SpecificActivityComponent = componentMap[componentType];

  // Se o tipo de componente não for encontrado ou for nulo, não renderiza nada.
  if (!SpecificActivityComponent) {
    return null;
  }

  // Renderiza o componente encontrado, passando quaisquer props adicionais.
  return <SpecificActivityComponent {...props} />;
};

export default ActivityComponentRenderer;