// Importações principais de React e bibliotecas
import { useContext, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { activities } from '../data/activities';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Play,
  Pause,
  ChevronLeft,
  Volume2,
  VolumeX,
  ZapIcon,
  User,
  Users,
  ArrowLeft,
} from 'lucide-react';
// Importa o renderizador de componentes dinâmicos
import ActivityComponentRenderer from './activity-components/ActivityComponentRenderer';

// Componente principal da página de detalhe da atividade
const ActivityDetail = () => {
  // Recupera o ID da atividade via rota
  const { activityId } = useParams();

  // Navegação entre páginas
  const navigate = useNavigate();

  // Estado de controle de áudio
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Referência ao player de áudio
  const audioRef = useRef(null);

  // Busca a atividade correspondente ao ID
  const activity = activities.find((a) => a.id === activityId);

  // Se não encontrar atividade, mostra mensagem e botão para voltar
  if (!activity) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Atividade não encontrada.</h1>
        
      </div>
    );
  }

  // Função para tocar ou pausar o áudio
  const handlePlayMission = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Alterna mute/desmute
  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Função que define a cor do badge com base na dificuldade
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40';
      case 'hard':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      default:
        return 'bg-purple-500/20 text-purple-400 border-purple-500/40';
    }
  };

  // Mapeia a dificuldade para um ícone correspondente.
  // Isso permite exibir um ícone visual que representa o nível de dificuldade.
  const difficultyIcons = {
    easy: <ZapIcon className="mr-1 h-6 w-6" />,
    medium: <div className="flex"><ZapIcon className="mr-1 h-6 w-6" /><ZapIcon className="mr-1 h-6 w-6" /></div>,
    hard: <div className="flex"><ZapIcon className="mr-1 h-6 w-6" /><ZapIcon className="mr-1 h-6 w-6" /><ZapIcon className="mr-1 h-6 w-6" /></div>,
  };
  // Mapeia a dificuldade da atividade para uma variante de estilo do componente Badge.
  // Isso permite alterar a aparência do badge com base na dificuldade (Easy, Medium, Hard).
  const difficultyBadgeVariant = {
    easy: 'outline',
    medium: 'outline',
    hard: 'outline',
  };

  // JSX principal da página
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 mt-20">
      
       {/* Botão para voltar à lista de atividades. O Link do react-router-dom está dentro do Button para combinar estilo e funcionalidade. */}
       <div className="mb-4">
          <Button  variant="default" className="text-lg md:text-xl font-baloo bg-[#FF4F87] hover:bg-[#FF4F87]/80 ">
              <Link to={`/atividades`} className='flex items-center gap-2'>
                <ArrowLeft className="mr-2 h-5 w-5 font-bold" />
                Voltar
              </Link>
          </Button>

       </div>
      
      {/* Container animado com os detalhes da atividade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black/40 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 overflow-hidden"
      >

        {/* Cabeçalho com título e badges */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <h1 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activity.color}`}>
              {activity.name}
            </h1>

            <div className="flex flex-wrap gap-2">
           
              {/* Badge para o tipo de atividade(Solo/Duo). */}
              <Badge variant="outline" className="border-white/30 text-white text-center">
                {/* Renderização condicional do ícone: `User` para Solo, `Users` para Grupo. */}
                {activity.type === 'Solo' ? (
                  <User className="mr-1 h-6 w-6" />
                ) : (
                  <Users className="mr-1 h-6 w-6" />
                )}
                {/*{activity.type}*/}
              </Badge>

              
              {/* Badge para a dificuldade, que agora inclui um ícone dinâmico. */}
              <Badge variant={difficultyBadgeVariant[activity.difficulty.toLowerCase()]} className={`capitalize flex items-center  ${getDifficultyColor(activity.difficulty)}`}>
                {/* Renderiza o ícone com base na dificuldade da atividade. 
                    Usamos .toLowerCase() para garantir que o mapeamento funcione mesmo que a propriedade venha com letra maiúscula (ex: "Easy"). */}
                {difficultyIcons[activity.difficulty.toLowerCase()]}
                {/*{activity.difficulty}*/}
              </Badge>
            </div>
          </div>

          {/* Linha decorativa */}
          <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-accent/50 rounded-full mb-6"></div>
        </div>

        

        {/* Player de áudio da missão */}
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-white flex items-center">
            {/* Ícone da missão */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8c-1.657 0-3 1.343-3 3v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6c0-1.657-1.343-3-3-3z" />
              <path d="M19 12v4c0 3.866-3.134 7-7 7s-7-3.134-7-7v-4" />
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            </svg>
            Detalhes da Missão
          </h2>

          {/* Texto da missão */}
          <div className="mb-4 p-4 bg-black/30 rounded-lg border border-white/10">
            <p className="text-white/70 italic">{activity.missionStory ? activity.missionStory : "No mission story available."}</p>
          </div>

          {/* Controles de reprodução */}
          <div className="flex items-center justify-between">
            <Button
              onClick={handlePlayMission}
              variant="outline"
              size="sm"
              className="space-button flex items-center gap-2"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4" /> Pause Mission
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" /> Play Mission Story
                </>
              )}
            </Button>

            <Button
              onClick={handleMuteToggle}
              variant="ghost"
              size="icon"
              className="text-white/70"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </div>

          {/* Player de áudio invisível (com áudio vazio apenas para exibição inicial) */}
          <audio
            ref={audioRef}
            onEnded={() => setIsPlaying(false)}
            src="data:audio/mp3;base64,..."
            muted={isMuted}
          />
        </div>

        {/* Seção para o Componente de Atividade Dinâmico */}
        {/* Esta seção só será renderizada se a atividade tiver um 'componentType' definido nos dados. */}
        {activity.componentType && (
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <div className="h-1 flex-grow bg-gradient-to-r from-primary/0 to-primary/50 rounded-full"></div>
              <h2 className="text-2xl font-bold text-white flex items-center mx-4 whitespace-nowrap">
                Ferramenta da Missão
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-primary/0 to-primary/50 rounded-full"></div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              {/* O ActivityComponentRenderer decide qual componente mostrar com base no tipo da atividade */}
              <ActivityComponentRenderer componentType={activity.componentType} activity={activity} />
            </div>
          </div>
        )}

        {/* Efeitos decorativos */}
        <div className="absolute top-5 right-5 w-24 h-24 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-5 left-5 w-32 h-32 rounded-full bg-accent/5 blur-3xl -z-10"></div>

        
      </motion.div>
    </div>
  );
};

export default ActivityDetail;
