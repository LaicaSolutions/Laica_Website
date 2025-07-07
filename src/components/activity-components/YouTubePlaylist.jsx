import React from 'react';

// Componente para renderizar um vídeo ou uma playlist do YouTube.
// Ele recebe o objeto 'activity' completo como prop.
const YouTubePlaylist = ({ activity }) => {
  const { playlistId, videoId } = activity || {};
  let embedSrc = '';

  // Prioriza a playlist se ambos os IDs forem fornecidos.
  if (playlistId) {
    embedSrc = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  } else if (videoId) {
    embedSrc = `https://www.youtube.com/embed/${videoId}`;
  }

  // Se nenhum ID for encontrado, exibe uma mensagem de erro.
  if (!embedSrc) {
    return (
      <div className="font-pixel text-center text-red-400 bg-black/50 border-4 border-red-500 p-8 rounded-lg">
        <p>ERRO: ID DO VÍDEO OU PLAYLIST NÃO ENCONTRADO.</p>
      </div>
    );
  }

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
};

export default YouTubePlaylist;