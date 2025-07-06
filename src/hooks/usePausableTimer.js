import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Um hook customizado para um cronômetro regressivo que pode pausar em intervalos.
 * @param {object} config - Objeto de configuração.
 * @param {number} config.initialTime - O tempo inicial em segundos.
 * @param {number} config.pauseInterval - O intervalo em segundos para pausar automaticamente.
 * @param {function} config.onIntervalPause - Callback executado na pausa de intervalo.
 * @param {function} config.onFinish - Callback executado quando o tempo acaba.
 */
export const usePausableTimer = ({
  initialTime = 0,
  pauseInterval = 60,
  onIntervalPause = () => {},
  onFinish = () => {},
}) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  const handleTick = useCallback(() => {
    setTimeRemaining(prevTime => {
      const newTime = prevTime - 1;

      // Pausa no intervalo definido
      if (newTime > 0 && newTime % pauseInterval === 0) {
        setIsActive(false);
        setIsPaused(true);
        onIntervalPause();
        return newTime;
      }

      // Fim do tempo
      if (newTime <= 0) {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setIsPaused(false);
        onFinish();
        return 0;
      }

      return newTime;
    });
  }, [pauseInterval, onIntervalPause, onFinish]);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(handleTick, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused, handleTick]);

  const startTimer = () => {
    setTimeRemaining(initialTime);
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => { setIsActive(false); setIsPaused(true); };
  const resumeTimer = () => { setIsActive(true); setIsPaused(false); };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false); setIsPaused(false);
    setTimeRemaining(initialTime);
  };

  return { timeRemaining, isActive, isPaused, startTimer, pauseTimer, resumeTimer, resetTimer };
};

