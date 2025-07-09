import React, { useState, useEffect, useMemo, useRef } from 'react';
import { usePausableTimer } from '../../hooks/usePausableTimer';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { SharePrompt } from './SharePrompt';

const LaicaTimer = ({ mode = 'countdown', initialTime = 300, sharePrompt, pauseInterval = null }) => {
  // --- Lógica de Contagem Regressiva (usando hook existente) ---
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  // IMPORTANTE: Crie uma pasta `public/sounds` e adicione os arquivos de áudio.
  const pauseSound = useMemo(() => new Audio('/sounds/pause-alert.mp3'), []);
  const finishSound = useMemo(() => new Audio('/sounds/times-up.mp3'), []);

  const {
    timeRemaining,
    isActive: countdownIsActive,
    isPaused: countdownIsPaused,
    startTimer: startCountdown,
    pauseTimer: pauseCountdown,
    resumeTimer: resumeCountdown,
    resetTimer: resetCountdown,
  } = usePausableTimer({ 
    initialTime,
    pauseInterval, // Pausa a cada X segundos. Se for null, não há pausa.
    onIntervalPause: () => pauseSound.play(),
    onFinish: () => {
      finishSound.play();
      if (isCountdown) {
        setIsCountdownFinished(true);
      }
    },
  });

  // --- Lógica de Cronômetro (Contagem Progressiva) ---
  const [elapsedTime, setElapsedTime] = useState(0);
  const [stopwatchIsActive, setStopwatchIsActive] = useState(false);
  const stopwatchIntervalRef = useRef(null);

  useEffect(() => {
    if (mode === 'stopwatch') {
      if (stopwatchIsActive) {
        stopwatchIntervalRef.current = setInterval(() => {
          setElapsedTime(prev => prev + 1);
        }, 1000);
      } else {
        clearInterval(stopwatchIntervalRef.current);
      }
    }
    return () => clearInterval(stopwatchIntervalRef.current);
  }, [stopwatchIsActive, mode]);

  const startStopwatch = () => setStopwatchIsActive(true);
  const pauseStopwatch = () => setStopwatchIsActive(false);
  const resumeStopwatch = () => setStopwatchIsActive(true);
  const resetStopwatch = () => {
    setStopwatchIsActive(false);
    setElapsedTime(0);
  };

  // --- Variáveis genéricas para controlar a UI ---
  const isCountdown = mode === 'countdown';

  const timeToDisplay = isCountdown ? timeRemaining : elapsedTime;
  const isActive = isCountdown ? countdownIsActive : stopwatchIsActive;
  const isPaused = isCountdown ? countdownIsPaused : !stopwatchIsActive && elapsedTime > 0;

  const start = isCountdown ? startCountdown : startStopwatch;
  const pause = isCountdown ? pauseCountdown : pauseStopwatch;
  const resume = isCountdown ? resumeCountdown : resumeStopwatch;
  const reset = isCountdown ? resetCountdown : resetStopwatch;
  const masterReset = () => {
    reset();
    setIsCountdownFinished(false);
  };

  // --- Funções de ajuda para a UI ---
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const getStatusMessage = () => {
    if (isCountdown) {
      if (countdownIsPaused && timeRemaining > 0) return "PAUSADO";
      if (timeRemaining === 0 && !countdownIsActive && !countdownIsPaused) return "TEMPO ESGOTADO! PARABENS!";
      if (countdownIsActive) return "HORA DE DESENHAR!";
      return "PRONTOS PARA COMECAR?";
    } else { // Modo Cronômetro
      if (isActive) return "CONTANDO...";
      if (isPaused) return "PAUSADO";
      return "PRONTO PARA MARCAR?";
    }
  };

  // Se a contagem regressiva terminou, mostra o prompt de compartilhamento
  if (isCountdown && isCountdownFinished) {
    return <SharePrompt {...sharePrompt} />;
  }

  return (
    <div className="font-pixel text-center p-6 md:p-8 rounded-lg max-w-lg mx-auto bg-black/50 border-4 border-pink-500 backdrop-blur-sm">
      
      
      <div className="my-6 md:my-8">
        <p className="text-5xl sm:text-6xl md:text-7xl text-neon-cyan">
          {formatTime(timeToDisplay)}
        </p>
        <p className="text-sm md:text-base text-white/80 mt-3 h-6 tracking-widest">
          {getStatusMessage()}
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        {!isActive && !isPaused && (
          <button onClick={start} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-neon-cyan text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto text-sm md:text-base">
            <Play className="h-5 w-5" /> Iniciar
          </button>
        )}

        {isActive && !isPaused && (
          <button onClick={pause} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-amber-400 text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto text-sm md:text-base">
            <Pause className="h-5 w-5" /> Pausar
          </button>
        )}

        {isPaused && (
          <button onClick={resume} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-neon-cyan text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto text-sm md:text-base">
            <Play className="h-5 w-5" /> Continuar
          </button>
        )}

        <button onClick={masterReset} className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-neon-pink text-black font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 md:w-auto text-sm md:text-base">
          <RefreshCw className="h-5 w-5" /> Reiniciar
        </button>
      </div>
    </div>
  );
};

export default LaicaTimer;
