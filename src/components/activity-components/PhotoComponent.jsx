import React from 'react';

// Um ícone simples de WhatsApp em SVG para usar no botão.
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mr-2"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.39 1.885 6.166l-1.29 4.721 4.833-1.274z" />
  </svg>
);

const PhotoComponent = () => {
  // IMPORTANTE: Substitua 'SEU_LINK_AQUI' pelo link real do seu grupo do WhatsApp
  const whatsappGroupLink = 'https://chat.whatsapp.com/SEU_LINK_AQUI';

  return (
    <div className="font-baloo text-center p-6 rounded-2xl max-w-lg mx-auto shadow-lg bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📸 Papais e Mamães, compartilhem a aventura!</h2>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md my-5 text-left">
        <p className="font-bold">Atenção, responsáveis!</p>
        <p className="text-sm">Para a segurança de todos, o compartilhamento de fotos no grupo deve ser feito exclusivamente por um adulto.</p>
      </div>

      <p className="text-gray-600 mb-6">
        Adoramos ver os pequenos exploradores completando os desafios! Entrem no nosso grupo do WhatsApp para compartilhar os registros e ver as aventuras de outras famílias.
      </p>
      <a
        href={whatsappGroupLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-lg"
      >
        <WhatsAppIcon />
        Entrar no Grupo
      </a>
    </div>
  );
};

export default PhotoComponent;