import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const CommunityPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 overflow-hidden">
      {/* Fundo com estrelas */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-black opacity-60 pointer-events-none animate-pulse-slow"></div>

      {/* Partículas de estrelas */}
      <div className="absolute inset-0 bg-[url('/assets/images/stars.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      <div className="relative bg-gradient-to-br from-[#1c1c4d]/90 to-[#0d1b2a]/90 border border-[#7FDBDA] rounded-2xl p-8 max-w-md w-full text-center shadow-[0_0_20px_rgba(127,219,218,0.4)] animate-fade-in space-y-4">

        {/* Botão de fechar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-[#7FDBDA] text-xl font-bold hover:text-white"
        >
          ×
        </button>

        {/* Título */}
        <h3 className="text-2xl font-bold text-[#7FDBDA] mb-2 animate-pulse">
          🌌 Junte-se à nossa constelação!
        </h3>

        {/* Texto */}
        <p className="text-white mb-4">
          Entre no nosso grupo do WhatsApp e receba conteúdos estelares sobre conexão familiar, dicas e novidades do universo Laica.
        </p>

        {/* Botão WhatsApp com efeito de brilho */}
        <a
          href="https://chat.whatsapp.com/DbrGtVBl2Dl19puhhvVkR5"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 transition-all shadow-lg animate-glow"
        >
          <FaWhatsapp size={20} />
          Entrar no grupo
        </a>
      </div>
    </div>
  );
};

export default CommunityPopup;
