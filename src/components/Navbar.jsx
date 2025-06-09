// Importação dos hooks do React e ícone do react-icons
import { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa';

const Navbar = () => {
  // Estado para controlar qual seção está ativa (em foco na rolagem)
  const [activeSection, setActiveSection] = useState('hero');

  // Estado para aplicar estilo diferente quando a página for rolada
  const [isScrolled, setIsScrolled] = useState(false);

  // Estado para abrir ou fechar o menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lista com as seções da página para navegação
  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'problem', label: 'O Problema' },
    { id: 'solution', label: 'Nossa Solução' },
    { id: 'team', label: 'A Equipe' },
    { id: 'timeline', label: 'Jornada' },
    { id: 'contact', label: 'Contato' },
  ];

  // Efeito para lidar com scroll e detecção da seção ativa
  useEffect(() => {
    const handleScroll = () => {
      // Ativa classe para navbar colada no topo com blur
      setIsScrolled(window.scrollY > 20);

      // Detecta qual seção está atualmente visível no viewport
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Percorre as seções de baixo para cima para determinar a atual
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    // Adiciona o event listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave até a seção desejada
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    // Fecha o menu mobile se estiver aberto
    setMobileMenuOpen(false);
  };

  return (
    // Navbar fixa no topo com efeito de transição e blur quando rolado
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D1B2A]/90 backdrop-blur-md py-3 shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      {/* Container da navbar */}
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo (clicável para voltar ao topo) */}
        <div 
          className="flex items-center space-x-4 cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          <img src="/assets/images/logo.png" alt="Logo" className="w-15 h-10" />
        </div>

        {/* Menu desktop (visível em telas md para cima) */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-inter transition-all duration-300 hover:text-[#FF4F87] ${
                activeSection === item.id ? 'text-[#FF4F87] font-medium' : 'text-[#F9F9F9]'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Botão destacado para ação (chamada principal) */}
          <button 
            onClick={() => scrollToSection('solution')}
            className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-2 px-6 rounded transition-all duration-300 font-poppins flex items-center"
          >
            <FaRocket className="mr-2" /> Se junte a missão
          </button>
        </div>

        {/* Botão para abrir/fechar menu mobile */}
        <button 
          className="md:hidden text-[#F9F9F9] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {/* Ícone hamburguer ou "X" dependendo do estado */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile (aparece quando o botão acima é clicado) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-inter text-left py-2 ${
                  activeSection === item.id ? 'text-[#FF4F87] font-medium' : 'text-[#F9F9F9]'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Botão destacado (repetido no menu mobile) */}
            <button 
              onClick={() => scrollToSection('solution')}
              className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-2 px-6 rounded transition-all duration-300 font-poppins flex items-center w-full justify-center mt-4"
            >
              <FaRocket className="mr-2" /> Se junte a missão
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
