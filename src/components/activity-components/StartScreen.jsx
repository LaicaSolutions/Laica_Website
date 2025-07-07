import React from 'react';
import { Rocket, Users, Clock, Gamepad2, ArrowLeft, Play } from 'lucide-react';

/**
 * Helper component para os itens de informação da missão.
 */
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="text-neon-cyan">{icon}</div>
    <div>
      <p className="text-xs text-white/60 tracking-widest">{label}</p>
      <p className="font-bold text-white">{value}</p>
    </div>
  </div>
);

/**
 * Uma tela de início de atividade com visual retrô dos anos 80, inspirada em fliperamas.
 * @param {object} props
 * @param {string} props.missionName - O nome da missão.
 * @param {string} props.difficulty - O nível de dificuldade (ex: 'Fácil', 'Médio').
 * @param {string} props.duration - A duração estimada.
 * @param {string} props.players - O número de jogadores.
 * @param {string} props.neonColor - A cor hexadecimal para o efeito neon do título.
 * @param {function} props.onStart - Callback para o botão "Iniciar".
 * @param {function} props.onGoBack - Callback para o botão "Voltar".
 */
export function StartScreen({
  missionName = "INICIAR DESAFIO",
  neonColor = '#00ffff', // Ciano neon como padrão
  onStart,
  onGoBack,
}) {
{/*const neonStyle = {
    color: neonColor,
    //textShadow: `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 20px ${neonColor}, 0 0 40px ${neonColor}`,
  };*/}
  

  return (
    <div className="font-pixel  bg-[#0d0d1a] text-white flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Efeito de grade no fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="relative z-10 text-center w-full max-w-2xl mt-10">
        {/* Título com efeito neon */}
        <h1 className={`text-4xl md:text-6xl bg-clip-text text-transparent uppercase bg-gradient-to-r ${neonColor}`} >
          {missionName}
        </h1>

        {/* Painel de Informações da Missão */}
        {/*<div className="mt-8 mb-10 border-4 border-neon-pink p-4 md:p-6 bg-black/50 backdrop-blur-sm">
          <h2 className="text-lg text-neon-pink tracking-widest mb-4 [text-shadow:_0_0_5px_#ff00ff]">
            MISSION BRIEFING
          </h2>
          <div className="grid grid-cols-2 gap-4 text-left text-sm md:text-base">
            <InfoItem icon={<Gamepad2 size={20} />} label="DIFICULDADE" value={difficulty} />
            <InfoItem icon={<Clock size={20} />} label="DURAÇÃO" value={duration} />
            <InfoItem icon={<Users size={20} />} label="JOGADORES" value={players} />
            <InfoItem icon={<Rocket size={20} />} label="VEÍCULO" value="LAICA-1" />
          </div>
        </div>*/}
        

        {/* Botões de Ação */}
        <div className="flex flex-col items-center gap-4 mt-8 md:mt-10">
          <button
            onClick={onStart}
            className="h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-[#FF4F87] text-black border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 "
          >
            <Play className="h-5 w-5 md:h-7 md:w-7 fill-black" />
          </button>

            {/*{onGoBack && (
            <button
              onClick={onGoBack}
              className="flex items-center gap-2 text-white/70 hover:text-white hover:text-neon-cyan transition-colors duration-200 mt-4"
            >
              <ArrowLeft size={16} />
              Voltar
            </button>
          )}*/}
          
        </div>
      </div>
    </div>
  );
}

export default StartScreen;