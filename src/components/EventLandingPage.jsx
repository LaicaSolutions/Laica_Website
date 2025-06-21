import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
//import Image from "next/image";
import { FaRocket, FaHeart, FaClock } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';
import SectionDivider from './SectionDivider';
//import kidsImage from "@/assets/kids-fun.png"; // substitua pelo caminho correto da imagem das crianças
//import momsImage from "@/assets/moms-together.png"; // substitua pelo caminho correto da imagem das mães

const eventData = {
  "missao-presenca": {
    title: "Missão Presença",
    subtitle: "Esta na hora de mandarmos a real e quebrar essa visão da mãe 'perfeita'. Um evento voltado para reflexão e fortalecimento do sentimento de conexão. ",
     date: "2023-12-15",
    time: "10:00 AM - 2:00 PM",
    location: "Parque do Ibirapuera, São Paulo – SP",
    mapLink: "https://maps.google.com/?q=Parque+do+Ibirapuera",
    description:
      "Participe de uma jornada intergaláctica com oficinas criativas, rodas de conversa e momentos lúdicos para fortalecer os vínculos familiares.",
    highlights: [
      "Oficina de foguetes recicláveis",
      "Missão de escuta ativa entre pais e filhos",
      "Brincadeiras cooperativas",
      "Meditação estelar para crianças",
    ],
    benefits: [
      "Desconecte-se do digital, reconecte-se com o essencial.",
      "Atividades pensadas para vínculos duradouros.",
      "Momentos que criam memórias para toda a tripulação.",
    ],
  },
};


export default function EventLandingPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const selectedEvent = eventData[slug];
    if (selectedEvent) {
      setEvent(selectedEvent);
      document.title = `${selectedEvent.title} | Laica`;
    }
  }, [slug]);

  if (!event) return <p>Evento não encontrado.</p>;
  const socialLinks = [
    {
      platform: "Comunidade do WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url: "https://chat.whatsapp.com/DbrGtVBl2Dl19puhhvVkR5",
      color: "hover:text-[#25D366]"
    },
    {
      platform: "Siga no Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/laica.space",
      urlShare:"",
      
      color: "hover:text-[#E1306C]"
    },
    
  ];
  const socialLinksShare = [
    {
      platform: "Compartilhe no WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url:"https://api.whatsapp.com/send?text=Participe%20dessa%20jornada%20em%20família!%20%F0%9F%8C%9F%20https://site-da-laica.web.app/evento/missao-presenca",
      color: "hover:text-[#25D366]"
    },
    {
      platform: "Compartilhe no LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=https://site-da-laica.web.app/evento/missao-presenca",
      color: "hover:text-[#0077B5]"
    },
    
    
  ];

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
  {/* ==== Nebulosa de fundo ==== */}
  
  {/* ==== Seção: Título e introdução ==== */}
  <section className="container mx-auto px-4 z-10 mb-16 mt-16">
    <div className="text-center mb-12">
      <div className="flex justify-center">
        <img
          src="/assets/images/bannerMissaoPresenca.png"
          alt="Banner da Missão Presença"
          className="w-full max-w-2xl h-auto"
        />
      </div>
      <p className="font-inter text-2xl text-[#F9F9F9]/80 max-w-3xl mx-auto mt-6">
        Está na hora de mandar a real e quebrar a ideia de perfeição nas relações familiares. Um evento para refletir, criar conexões reais e fortalecer os vínculos afetivos.
      </p>
    </div>


    {/* ==== Data do evento ==== */}
    <div className="flex items-center justify-center gap-2 text-2xl text-yellow-300 mb-8">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
       <span>
              19/07/25 (sábado) 
            </span>
    </div>

    {/* ==== Botões principais ==== */}
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
      <button
        onClick={() => {
    document.getElementById("missao")?.scrollIntoView({ behavior: "smooth" });
  }}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow-lg w-full md:w-auto text-center"
      >
        Detalhe da missão
      </button>
      <button
        onClick={() => {
    document.getElementById("ingresso")?.scrollIntoView({ behavior: "smooth" });
  }}
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow-lg w-full md:w-auto text-center"
      >
        Quero decolar    
      </button>
    </div>
  </section> {/* Fim da seção: Título e introdução */}

  {/* ==== Divisor de sessão ==== */}
  <SectionDivider type="wavy" />

   {/* ==== Seção: Notícias impactantes ==== */}
  <section>
      <div className="text-center mb-3">
      <h2 className="font-baloo text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9F9F9]">
        Constantemente encontramos notícias como:
      </h2>
    </div>

    {/* ==== Cartões de notícias ==== */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-2 font-baloo">
                  Desenvolvimento infantil é prejudicado com uso de telas
                </h3>
                <p className="text-white/80 font-inter">
                  O excesso de exposição às telas compromete a atenção, o vínculo e o aprendizado nas primeiras infâncias.
                </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-2 font-baloo">
                  83% das crianças se sentem trocadas pelo celular dos pais
                </h3>
                <p className="text-white/80 font-inter">
                  A ausência de conexão afeta o emocional infantil e contribui para sentimentos de rejeição e insegurança.
                </p>
        </div>
      </div>
    </div>

    {/* ==== Seção: Reflexão sobre a maternidade ==== */}
    <h2 className="font-baloo text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9F9F9] text-center">Mas, sabe o que ninguém te diz?</h2>
    <div className="container mx-auto px-4 py-12">
        <section className="flex justify-center items-center">
            <div className="max-w-3xl text-center bg-white/10 border border-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl text-white">
              
              <p className="text-lg md:text-xl text-white/90 mb-4 font-inter">
                Os pais também se sentem trocados pela rotina, pelas cobranças, pela solidão.
              </p>

              <div className="bg-pink-500 inline-block px-6 py-3 rounded mb-4">
                <span className="text-white font-bold text-lg">
                  E se o problema não for o celular?
                </span>
              </div>

              <p className="text-lg md:text-xl text-purple-200 font-semibold mb-4 font-inter">
                E se o verdadeiro vilão for um mundo que exige demais e acolhe de menos?
              </p>

              <p className="text-base md:text-lg text-white/80 font-inter">
                Nós, pais, não estamos desconectados, estamos esgotados. Porque não adianta falar de presença, se a vida exige nossa ausência.
              </p>
            </div>
        </section>
    </div>

  </section> {/* Fim da seção: Notícias impactantes */}

 
  

  {/* ==== Seção: O que vai acontecer ==== */}
  <section id="missao" className="relative min-h-screen py-20 overflow-hidden">
    {/* Nebula de fundo novamente */}
    <div className="nebula-bg absolute inset-0 bg-gradient-to-r from-[#4B3F72]/30 via-[#7FDBDA]/20 to-[#4B3F72]/30 bg-[length:200%_100%] opacity-50  pointer-events-none"></div>

    <div className="container mx-auto px-4 z-10">
      <div className="text-center mb-4 ">
          <h2 
           
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            O que vai acontecer nesta <span className="text-[#FF4F87]">aventura espacial</span>
          </h2>
       <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
          Em um encontro presencial, pais e filhos embarcam em duas jornadas paralelas e imersivas
        </p>
      </div>

      {/* ==== Bloco: Jornadas ==== */}
      <section className="relative py-20 px-6 md:px-12 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

          {/* Jornada das Crianças */}
          <div className="border border-[#7FDBDA]/30 flex flex-col md:flex-row bg-[#0d1b2a] rounded-2xl p-6 md:p-10 shadow-xl items-center gap-8 w-full max-w-5xl mx-auto">
            <div className="relative w-full md:w-1/2"><img src="/assets/images/kids_fun.png" alt="Crianças no evento"
                className="w-full max-w-md md:max-w-lg transform scale-110 -mt-10 md:-mt-0" /></div>
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">Jornada das Crianças</h3>
              <p className="mb-4 text-lg">
                As crianças viram <span className="text-pink-400 font-semibold">astronautas</span> e embarcam numa jornada espacial pelo <span className="text-pink-400 font-semibold">universo</span> da imaginação, vínculo e afeto.
              </p>
              <p className="text-lg">
                Cada planeta traz um pilar do <span className="text-pink-400 font-semibold">desenvolvimento infantil</span>, tudo com a companhia da Laica, nossa exploradora divertida que guia a aventura.
              </p>
            </div>
          </div>

          {/* Jornada das Mães */}
          <div className="border border-[#7FDBDA]/30 flex flex-col md:flex-row-reverse bg-[#0d1b2a] rounded-2xl p-6 md:p-10 shadow-xl items-center gap-8 w-full max-w-5xl mx-auto">
            {/* Imagem das mães */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/images/moms-together.png"
                alt="Mães no evento"
                className="w-full max-w-md md:max-w-lg transform scale-110 -mt-10 md:-mt-0"
              />
            </div>

            {/* Texto da jornada */}
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-3xl font-bold text-pink-400 mb-4">Jornada dos Responsáveis</h3>
              <p className="mb-4 text-lg">
                Enquanto as crianças exploram o universo, os adultos responsáveis embarcam em uma jornada de dentro pra fora, com rodas de conversa acolhedoras mediadas por nossa <span className='text-yellow-300 font-semibold'>educadora parental</span>.
              </p>
              <p className="text-lg">
                Serão <span className="text-yellow-300 font-semibold">vivências terapêuticas</span> e reflexões sobre culpa, conexão e presença real.
              </p>
            </div>
          </div>

          {/* Momento Conexão Mãe e Filho */}
          <div className="border border-[#7FDBDA]/30 flex flex-col md:flex-row bg-[#0d1b2a] rounded-2xl p-6 md:p-10 shadow-xl items-center gap-8 w-full max-w-5xl mx-auto">
            {/* Imagem do reencontro */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <img
                src="/assets/images/mom-child-reconnect.png" // Substitua pelo caminho correto da imagem
                alt="Mãe e filho se reencontrando"
                className="w-full max-w-md md:max-w-lg transform scale-110 -mt-6"
              />
            </div>

            {/* Texto da jornada final */}
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-3xl font-bold text-blue-300 mb-4">Momento Especial de Conexão com as Crianças</h3>
              <p className="text-lg">
                No final: <span className="font-semibold text-white">responsável e criança</span> se reencontram transformados, com um exercício conjunto de <span className="text-pink-400 font-semibold">reconexão</span> para selar a jornada.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  </section> {/* Fim da Sessão: Jornadas */}
  
  
  {/* ==== Sessão: Nossa convidada ==== */}
  <section id="missao" className="relative  py-20 overflow-hidden">
    {/* ==== Divisor de sessão ==== */}
    <SectionDivider type="wavy" />
  
    {/* Nebula de fundo novamente */}
    <div className="nebula-bg absolute inset-0 bg-gradient-to-r from-[#4B3F72]/30 via-[#7FDBDA]/20 to-[#4B3F72]/30 bg-[length:200%_100%] opacity-50  pointer-events-none"></div>
    {/* ==== Conteúdo da sessão ==== */}
    <div className="container mx-auto px-4 z-10">
      <div className="text-center mb-4 ">
          <h2 
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            Conheça nossa <span className="text-pink-400">educadora parental</span>
          </h2>
      
      </div>
          {/* Cartão da educadora */}
        <div className="bg-gradient-to-br from-[#4B3F72]/20 to-[#0D1B2A]/80 backdrop-blur-md border border-[#7FDBDA]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">

          {/* Foto da educadora */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/assets/images/bianca.png" // Ajuste o caminho conforme o seu projeto
              alt="Educadora Parental"
              className="rounded-full w-48 h-48 object-cover border-4 border-[#7FDBDA]/40 shadow-md"
            />
          </div>

          {/* Texto de apresentação */}
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-bold text-[#F9F9F9] mb-2">Bianca Rodrigues</h3>
            <p className="text-[#F9F9F9]/80 mb-4">
              Educadora parental com vasta experiência em desenvolvimento infantil, relações familiares e comunicação afetiva. Ela conduzirá momentos especiais durante o evento, oferecendo apoio, escuta e reflexões que ajudam a fortalecer os laços entre adultos e crianças.
            </p>
            <p className="text-[#F9F9F9]/80 italic mb-4">"Educar não é apenas moldar atitudes, mas nutrir vínculos que sustentam o desenvolvimento emocional."</p>

            {/* Redes sociais */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/biarodriguesterapeuta/" // Coloque o link real do Instagram dela
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 flex items-center gap-2 transition-colors duration-300"
              >
                <FaInstagram size={30} />
                <span >Conheça mais sobre a Bianca</span>
              </a>
            </div>
          </div>

        </div>{/* Fim do cartão da educadora */}

    </div>{/* Fim do conteudo */}
 </section> {/** Fim da Sessão: Nossa convidada */}

  {/* ==== Seção: Coordenação do Evento ==== */}
  <section id="event-info" className="py-20 relative">
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
            Coordenação Espacial
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event info cards */}
            <div className="space-y-6">
              {/* Data */}
              <div className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-colors shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-blue-200 mb-2">Data</h3>
                    <p className="text-white">Sábado, 19/07/2025</p>
                  </div>
                </div>
              </div>
              
              {/* Hora */}
              <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-colors shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-purple-200 mb-2">Hora</h3>
                    <p className="text-white">
                      Início às 13h40 e <br/>encerramento às 17h30
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Audiencia target */}
              <div className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/50 transition-colors shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-indigo-200 mb-2">Publico-alvo</h3>
                    <p className="text-white">Para mães, pais, tutores e
crianças entre 5 e 10 anos</p>
                  </div>
                </div>
              </div>
              
              {/* What to bring - if available */}
              
                <div className="bg-teal-900/20 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:border-teal-400/50 transition-colors shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500/20 p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-teal-200 mb-2">Nota sobre o evento</h3>
                      <p>Evento <span className="font-bold">presencial</span>, sem necessidade de uso de <span className="font-bold">celular</span></p>

                      
                    </div>
                  </div>
                </div>
              
            </div>
            
            {/* Localização e Mapa */}
            <div className="space-y-6">
              <div className="bg-pink-900/20 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/50 transition-colors shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/20 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-pink-200 mb-2">Localização</h3>
                    <p className="text-white">B2mamy</p>
                    <p className="text-gray-300 mt-1">R. Mateus Grou, 576 

- Pinheiros, São Paulo</p>
                  </div>
                </div>
              </div>
              
              {/* Map - iframe for Google Maps embed */}
              
                <div className="h-[300px] rounded-xl overflow-hidden shadow-lg border border-blue-500/30">
                  
                  
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.196381537774!2d-46.686262199999994!3d-23.5613894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5783a87862ff%3A0xca221c9f4f4e5360!2sCasa%20B2Mamy%20%7C%20Coworking%20e%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1749694154656!5m2!1spt-BR!2sbr"
                    width="100%" 
                    height="100%" 
                    className="border-0"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Location"
                  ></iframe>
                </div>
              
              
              {/* Limited spots message */}
              
                <div className="relative bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm border border-yellow-500/50 rounded-xl p-6 shadow-lg">
                  <div className="absolute -top-3 -right-3">
                    <div className="animate-ping absolute w-6 h-6 rounded-full bg-yellow-400 opacity-75"></div>
                    <div className="relative w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-900" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-yellow-300 mb-2">Evento de Capacidade Limitada</h3>
                  <p className="text-white">Apenas <span className="font-bold">30 vagas</span> disponiveis para participar dessa aventura cósmica! Corra para se increver.</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
  </section>  {/* Fim da Sessão: Coordenação do Evento */}
    
    {/* Sessão: Compra do ingresso */}
    <section id ="ingresso" className=" px-6 md:px-12 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
            Corra para aproveitar o desconto de férias escolares
      </h2>

      <div className="flex flex-col md:flex-row bg-[#0d1b2a] rounded-2xl p-6 md:p-10 shadow-xl items-center gap-8 w-full max-w-5xl mx-auto border border-[#7FDBDA]/30 hover:border-[#7FDBDA]/50 transition-all duration-300">
      {/* Lado esquerdo com preço e botão */}
      <div className="bg-[#ffe372] rounded-xl p-4 md:p-6 text-center relative w-full md:w-1/3 flex flex-col justify-between">
        {/* Selo de desconto */}
        <div className="absolute top-0 left-0 bg-red-500 text-white font-bold text-sm px-2 py-1 rounded-br-xl">
          30% OFF
        </div>
        <p className="bg-red-600 text-white font-bold px-3 py-1 rounded-full mt-8 mb-4 w-fit mx-auto text-sm">
          Apenas o 1º lote!
        </p>
        <div className="text-xs line-through text-gray-700">de R$74,30</div>
        <div className="text-3xl font-bold text-purple-900 mb-1">R$ 49,90</div>
        <div className="text-xs mb-4 text-gray-800">por pessoa</div>

        <style jsx>{`
            @keyframes jump {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-8px);
              }
            }

            .jump-animation {
              animation: jump 0.6s ease-in-out infinite;
            }
          `}
        </style>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSck_xYYv5bkDA6ZohaRChWOd8SjbjIlb2Y6LLcb5DpUnnZCow/viewform" // substitua pela URL de destino
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-700 text-white font-bold px-4 py-2 rounded-xl shadow-inner border border-purple-400 transition-all text-center inline-block jump-animation"
      >
        Inscreva-se agora<br />
        <span className="italic underline text-sm">clique aqui</span>
      </a>
      </div> {/* Fim do Lado esquerdo */}

        {/* Texto da jornada final */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-bold text-blue-300 mb-4">Ingresso estelar para a aventura no universo da família</h3>
          <p className="text-lg">
            Cada adulto e cada criança adquire seu ingresso. Inclui:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li className="mb-2">3h30 de atividades imersivas</li>
            <li className="mb-2">Momento coffee break</li>
            <li className="mb-2">Uma jornada única de conexão, afeto e diversão no mundo real</li>
            <li className="mb-2">Fotos e memórias inesquecíveis do evento</li>
            
            <li className="mb-2">Kit e sorteios exclusivos</li>
          </ul>
        </div>{/* Fim do texto da jornada final */}
      </div>{/* Fim da Sessão: Compra do ingresso */}




    

    </section>  {/* Fim da Sessão: Como Participar do Evento */}

  {/* Sessão: Aliados Estelares */}
  <section className="relative  py-12 overflow-hidden">
    {/* Nebula de fundo novamente */}
    <div className="nebula-bg absolute inset-0 bg-gradient-to-r from-[#4B3F72]/30 via-[#7FDBDA]/20 to-[#4B3F72]/30 bg-[length:200%_100%] opacity-50  pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Texto da Esquerda */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold leading-tight text-yellow-300">
          Aliados Estelares que Acreditam na Conexão Real
        </h2>
        <p className="mt-4 text-lg text-purple-100">
          Essas marcas incríveis embarcaram com a gente nessa jornada de afeto e imaginação para transformar o universo das famílias.
        </p>
        <a
          href="mailto:laica.dog.caramelo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105"
        >
          Quero fazer parte
        </a>
      </div>

      {/* Logos dos parceiros */}
      <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white/10 p-6 rounded-xl shadow-inner backdrop-blur-sm">
        <img src="/assets/images/logo1.png" alt="Logo 1" className="h-24 mx-auto object-contain" />
        <img src="/assets/images/logo2.png" alt="Logo 2" className="h-24 mx-auto object-contain" />
        <img src="/assets/images/logo3.png" alt="Logo 3" className="h-24 mx-auto object-contain" />
       
      </div>
    </div>


    





  </section>{/* Fim da Sessão: Aliados Estelares */}

  {/* Sessão: Comunidade do Evento */}      
  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-12">
  {/* Conteúdo nossa comunidade */}
  <div className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300">
    <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6 text-center">
      Notícias, dicas e muito mais, se junte à nossa comunidade
    </h3>

    <div className="grid grid-cols-2 gap-6 mb-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-[#0D1B2A]/50 p-4 rounded-lg hover:bg-[#0D1B2A]/70 transition-all duration-300 hover:animate-pulse"
        >
          <div className={`text-[#7FDBDA] ${social.color} transition-colors duration-300 mb-2`}>
            {social.icon}
          </div>
          <span className="font-inter text-[#F9F9F9] text-center">{social.platform}</span>
        </a>
      ))}
    </div>
  </div>



  {/* Conteúdo compartilhe */}
  <div className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300">
    <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6 text-center">
      Compartilhe em suas redes
    </h3>
    <div className="grid grid-cols-2 gap-6 mb-6">
      {socialLinksShare.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-[#0D1B2A]/50 p-4 rounded-lg hover:bg-[#0D1B2A]/70 transition-all duration-300"
        >
          <div className={`text-[#7FDBDA] ${social.color} transition-colors duration-300 mb-2`}>
            {social.icon}
          </div>
          <span className="font-inter text-[#F9F9F9] text-center">{social.platform}</span>
        </a>
      ))}
    </div>
  </div>
</section>
{/* Fim da Sessão: Comunidade do Evento */}


    


    
    








</div>


  );
}
