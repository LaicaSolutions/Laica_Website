// Importações principais de React e bibliotecas
import { useContext, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { activities } from '../data/activities';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, Pause, Volume2, VolumeX, Zap, User, Users, ArrowLeft, BookOpen, BookUp, RefreshCw } from 'lucide-react';
// Importa o renderizador de componentes dinâmicos
import { logAnalyticsEvent } from '../services/analytics';
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
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

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
    logAnalyticsEvent('select_content', {
      content_type: 'audio_control',
      item_id: isPlaying ? 'pause' : 'play',
      activity_id: activity.id,
      activity_name: activity.name,
    });

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

  // Função para reiniciar o áudio
  const handleRestartMission = () => {
    logAnalyticsEvent('select_content', {
      content_type: 'audio_control',
      item_id: 'restart',
      activity_id: activity.id,
      activity_name: activity.name,
    });

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Função que define a cor do badge com base na dificuldade
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'border-cyan-400 text-cyan-400';
      case 'medium':
        return 'border-yellow-400 text-yellow-400';
      case 'hard':
        return 'border-pink-500 text-pink-500';
      default:
        return 'border-gray-400 text-gray-400';
    }
  };

  // Mapeia a dificuldade para um ícone correspondente.
  // Isso permite exibir um ícone visual que representa o nível de dificuldade.
  const difficultyIcons = {
    easy: <Zap className="mr-1 h-4 w-4" />,
    medium: <div className="flex"><Zap className="mr-1 h-4 w-4" /><Zap className="mr-1 h-4 w-4" /></div>,
    hard: <div className="flex"><Zap className="mr-1 h-4 w-4" /><Zap className="mr-1 h-4 w-4" /><Zap className="mr-1 h-4 w-4" /></div>,
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
    <div className="font-baloo container max-w-4xl mx-auto py-12 px-4 mt-10 md:mt-20">
      
       {/* Botão para voltar à lista de atividades. O Link do react-router-dom está dentro do Button para combinar estilo e funcionalidade. */}
       <div className="mb-4">
          <Link to={`/atividades`}>
            <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150">
              <ArrowLeft className="h-5 w-5" />
              Voltar
            </button>
          </Link>

       </div>
      
      {/* Container animado com os detalhes da atividade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-black/50 border-4 border-pink-500 backdrop-blur-sm rounded-lg p-6 md:p-8 overflow-hidden"
      >

        {/* Cabeçalho com título e badges */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <h1 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${activity.color}`}>
              {activity.name}
            </h1>

            <div className="flex flex-wrap gap-2">
           
              {/* Badge para o tipo de atividade(Solo/Duo). */}
              <Badge variant="outline" className="border-2 border-gray-400 text-gray-400 p-2">
                {/* Renderização condicional do ícone: `User` para Solo, `Users` para Grupo. */}
                {activity.type === 'Solo' ? (
                  <User className="h-5 w-5" />
                ) : (
                  <Users className="h-5 w-5" />
                )}
              </Badge>

              
              {/* Badge para a dificuldade, que agora inclui um ícone dinâmico. */}
              <Badge variant="outline" className={`border-2 p-2 capitalize flex items-center ${getDifficultyColor(activity.difficulty)}`}>
                {/* Renderiza o ícone com base na dificuldade da atividade. 
                    Usamos .toLowerCase() para garantir que o mapeamento funcione mesmo que a propriedade venha com letra maiúscula (ex: "Easy"). */}
                {difficultyIcons[activity.difficulty.toLowerCase()]}
              </Badge>
            </div>
          </div>
        </div>

        

        {/* Player de áudio da missão */}
        <div className="bg-black/30 border-2 border-cyan-500 rounded-lg p-4 md:p-6">
          <h2 className="text-lg uppercase tracking-widest mb-4 text-cyan-500 flex items-center">
            {/* Ícone da missão */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-cyan-500"
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
            Detalhes do Desafio
          </h2>

          {/* Controles de áudio */}
          <div className="flex items-center gap-4 mb-6">
            {/* Botão principal de Ouvir/Pausar */}
            <button
              onClick={handlePlayMission}
              className="flex-grow flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-cyan-400 px-6 py-3 font-bold uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_#fff] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-5 w-5" /> Pausar Desafio
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" /> Ouvir Desafio
                </>
              )}
            </button>
            
            {/* Botão de Reiniciar */}
            <button
              onClick={handleRestartMission}
              className="flex-shrink-0 flex items-center justify-center h-12 w-12 bg-pink-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_#fff] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 rounded-lg"
              aria-label="Reiniciar áudio"
            >
              <RefreshCw className="h-6 w-6" />
            </button>
          </div>

          {/* Player de áudio invisível */}
          <audio
            ref={audioRef}
            onEnded={() => setIsPlaying(false)}
            src={activity.audioSrc || "data:audio/mp3;base64,..."}
            muted={isMuted}
          />

          {/* Texto da missão */}
          <div className="text-center">
            <button
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              className="text-amber-400 hover:text-amber-300 transition-colors text-md font-semibold inline-flex items-center gap-2"
            >
              {isDescriptionOpen ? (
                <>
                  <BookUp className="h-4 w-4" /> Esconder História
                </>
              ) : (
                <>
                  <BookOpen className="h-4 w-4" /> Ler História do Desafio
                </>
              )}
            </button>
            <AnimatePresence>
              {isDescriptionOpen && (
                <motion.div
                  key="mission-story"
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-black/30 rounded-md text-left">
                    <p className="text-white/80 leading-relaxed">
                       {activity.missionStory.split('\n').map((line, index) => (
                        <p key={index}>
                          {line === '' ? <br /> : line}
                        </p>
                      ))}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        

        {/* Seção para o Componente de Atividade Dinâmico */}
        {/* Esta seção só será renderizada se a atividade tiver um 'componentType' definido nos dados. */}
        {activity.componentType && (
          <div className="mt-8">
            {/* O ActivityComponentRenderer decide qual componente mostrar com base no tipo da atividade */}
            <ActivityComponentRenderer componentType={activity.componentType} activity={activity} />
          </div>
        )}

        
      </motion.div>
    </div>
  );
};

export default ActivityDetail;