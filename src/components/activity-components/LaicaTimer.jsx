import React, { useMemo } from 'react';
import { usePausableTimer } from '../../hooks/usePausableTimer';

// Ícones para os botões
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PauseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const RefreshIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120.5 13M20 20l-1.5-1.5A9 9 0 003.5 11" /></svg>;

const LaicaTimer = () => {
  // IMPORTANTE: Crie uma pasta `public/sounds` e adicione os arquivos de áudio.
  const pauseSound = useMemo(() => new Audio('/sounds/pause-alert.mp3'), []);
  const finishSound = useMemo(() => new Audio('/sounds/times-up.mp3'), []);

  const {
    timeRemaining,
    isActive,
    isPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  } = usePausableTimer({
    initialTime: 300, // 10 minutos
    pauseInterval: 60, // Pausa a cada 1 minuto
    onIntervalPause: () => pauseSound.play(),
    onFinish: () => finishSound.play(),
  });

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const getStatusMessage = () => {
    if (isPaused && timeRemaining > 0) return "Pausa! Troquem de lugar! 🎨";
    if (timeRemaining === 0 && !isActive && !isPaused) return "Tempo esgotado! Parabéns! 🎉";
    if (isActive) return "Hora de desenhar!";
    return "Prontos para começar?";
  };

  return (
    <div className="font-baloo text-center p-6 rounded-2xl max-w-lg mx-auto shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
      
      
      <div className="my-8">
        <p className="text-7xl font-mono text-indigo-600 tracking-wider">
          {formatTime(timeRemaining)}
        </p>
        <p className="text-lg text-gray-600 mt-2 h-6">
          {getStatusMessage()}
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {!isActive && !isPaused && (
          <button onClick={startTimer} className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
            <PlayIcon /> Iniciar
          </button>
        )}

        {isActive && !isPaused && (
          <button onClick={pauseTimer} className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
            <PauseIcon /> Pausar
          </button>
        )}

        {isPaused && (
          <button onClick={resumeTimer} className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
            <PlayIcon /> Continuar
          </button>
        )}

        <button onClick={resetTimer} className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
          <RefreshIcon /> Reiniciar
        </button>
      </div>
    </div>
  );
};

export default LaicaTimer;

