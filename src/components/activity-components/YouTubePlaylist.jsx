import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { logAnalyticsEvent } from '../../services/analytics';
import { SharePrompt } from './SharePrompt';

// Componente para renderizar um vídeo ou uma playlist do YouTube.
// Ele recebe o objeto 'activity' completo como prop.
const YouTubePlaylist = ({ activity }) => {
  const { playlistId, videoId, videoIds, sharePrompt } = activity || {};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const startTimeRef = useRef(Date.now());

  // Caso 1: É uma playlist
  if (playlistId) {
    const embedSrc = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
    return (
      <div className="aspect-video w-full bg-black border-4 border-cyan-400 rounded-lg p-1 shadow-lg">
        <iframe
          className="w-full h-full rounded-md"
          src={embedSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Caso 2: É um array de IDs de vídeo
  if (Array.isArray(videoIds) && videoIds.length > 0) {
    // Dispara um evento quando a sequência de vídeos começa
    useEffect(() => {
      logAnalyticsEvent('video_series_start', {
        video_count: videoIds.length,
        activity_name: activity.name,
      });
    }, [videoIds.length, activity.name]);

    const goToPrevious = () => {
      const isFirst = currentIndex === 0;
      const newIndex = isFirst ? videoIds.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      logAnalyticsEvent('select_content', {
        content_type: 'video_navigation',
        item_id: 'previous',
        video_id: videoIds[currentIndex],
      });
    };

    const goToNext = () => {
      const isLast = currentIndex === videoIds.length - 1;

      logAnalyticsEvent('select_content', {
        content_type: 'video_navigation',
        item_id: isLast ? 'finish' : 'next',
        video_id: videoIds[currentIndex],
      });

      if (isLast) {
        const durationInSeconds = (Date.now() - startTimeRef.current) / 1000;
        logAnalyticsEvent('video_series_complete', {
          duration_seconds: Math.round(durationInSeconds),
          video_count: videoIds.length,
          activity_name: activity.name,
        });
        setIsFinished(true);
      } else {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
      }
    };

    const embedSrc = `https://www.youtube.com/embed/${videoIds[currentIndex]}`;

    if (isFinished) {
      return (
        <SharePrompt
          title="Você concluiu todos os níveis da série!"
          description="Que tal compartilhar essa conquista?"
          whatsappMessage="Completei todos os níveis da série!"
          {...sharePrompt}
        />
      );
    }

    return (
      <div className="w-full flex flex-col items-center p-4 gap-4">
        <div className="aspect-video w-full bg-black border-4 border-cyan-400 rounded-lg p-1 shadow-lg">
          <iframe
            key={currentIndex} // Força o recarregamento do iframe quando o src muda
            className="w-full h-full rounded-md"
            src={embedSrc}
            title={`YouTube video player ${currentIndex + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-center justify-center gap-8 text-white mt-4">
          <button onClick={goToPrevious} className="p-3 bg-[#FF4F87] rounded-full hover:bg-[#FF4F87]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D1B2A] focus:ring-white">
            <ArrowLeft />
          </button>
          <span className="font-bold text-lg font-inter">
            {currentIndex + 1} / {videoIds.length}
          </span>
          <button onClick={goToNext} className="p-3 bg-[#FF4F87] rounded-full hover:bg-[#FF4F87]/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D1B2A] focus:ring-white">
            <ArrowRight />
          </button>
        </div>
      </div>
    );
  }

  // Caso 3: É um único ID de vídeo
  if (videoId) {
    const embedSrc = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="aspect-video w-full bg-black border-4 border-cyan-400 rounded-lg p-1 shadow-lg">
        <iframe
          className="w-full h-full rounded-md"
          src={embedSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Caso 4: Nada foi fornecido
  return (
    <div className="font-pixel text-center text-red-400 bg-black/50 border-4 border-red-500 p-8 rounded-lg">
      <p>ERRO: ID DO VÍDEO OU PLAYLIST NÃO ENCONTRADO.</p>
    </div>
  );
};

export default YouTubePlaylist;