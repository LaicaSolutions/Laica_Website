import React from 'react';

// Componente para renderizar uma playlist do YouTube.
// Ele recebe o objeto 'activity' completo como prop.
const YouTubePlaylist = ({ activity }) => {
  // Verifica se a atividade possui um ID de playlist. Se não, exibe uma mensagem de erro.
  if (!activity?.playlistId) {
    return (
      <div className="text-center text-red-400">
        <p>ID da playlist do YouTube não foi configurado para esta atividade.</p>
      </div>
    );
  }

  // Constrói a URL de incorporação (embed) para a playlist.
  const playlistSrc = `https://www.youtube.com/embed/videoseries?list=${activity.playlistId}`;

  return (
    // O container 'aspect-video' mantém a proporção correta do vídeo (16:9).
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src={playlistSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlaylist;