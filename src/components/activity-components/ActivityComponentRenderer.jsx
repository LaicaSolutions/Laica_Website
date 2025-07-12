import React,{ useState } from 'react';

// 1. Importe todos os componentes de atividade que você criar.
import PuzzleCanvas from './PuzzleCanvas';
import RandomPhraseGenerator from './RandomPhraseGenerator';
import YouTubePlaylist from './YouTubePlaylist';
import SpaceHuntBingo from './SpaceBingo/SpaceHuntBingo';
import PhotoComponent from './PhotoComponent';
import FourHandsDrawing from './FourHandsDrawing';
import CrewQuestions from './CrewQuestions';
import IntergalaticInterview from './IntergalaticInterview';
import { SharePrompt } from './SharePrompt';
import { StartScreen } from './StartScreen';
import CrazyStory from './CrazyHistory';
import BuildWorld from './BuildWorld';
import MakingPlan from './MakingPlan';
import { Puzzle } from 'lucide-react';


// 2. Crie o mapeamento: a chave é o `componentType` do seu dataset, o valor é o componente importado.
const componentMap = {
  puzzle: PuzzleCanvas,
  phrase: RandomPhraseGenerator,
  video: YouTubePlaylist,
  spaceHunt: SpaceHuntBingo,
  photoShare: PhotoComponent,
  fourHandsDrawing: FourHandsDrawing,
  crewQuestions: CrewQuestions,
  character: IntergalaticInterview,
  share: SharePrompt,
  crazyStory: CrazyStory,
  buildWorld: BuildWorld,
  makingPlan: MakingPlan,
  // Adicione outros tipos de componentes aqui conforme for criando
};



// 3. O componente Renderer que seleciona e renderiza o componente correto.
const ActivityComponentRenderer = ({ componentType, ...props }) => {
  //Estado para controlar se a experiência começou
  const [hasStarted, setHasStarted] = useState(false);

  

  //Lógica de renderização condicional
  if (!hasStarted) {
    return <StartScreen neonColor={props.activity?.color} missionName={props.activity?.name} activityId={props.activity?.id} onStart={() => setHasStarted(true)}  />;
  }


  // Busca o componente no mapa.
  const SpecificActivityComponent = componentMap[componentType];

  // Se o tipo de componente não for encontrado ou for nulo, não renderiza nada.
  if (!SpecificActivityComponent) {
    return null;
  }

   // Lógica especial para o SharePrompt: passa as props dinâmicas do objeto da atividade.
  if (componentType === 'share') {
    // Extrai o objeto `sharePrompt` da atividade. Se não existir, usa um objeto vazio.
    // Isso permite que o componente SharePrompt use seus valores padrão.
    const shareProps = props.activity?.sharePrompt || {};
    return <SharePrompt {...shareProps} />;
  }

  // Para outros componentes, passa a atividade inteira e quaisquer outras props.
  return <SpecificActivityComponent  {...props} />;

};

export default ActivityComponentRenderer;