import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';
import { logAnalyticsEvent } from '../services/analytics';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation(); // <- Pega a rota atual
  const navigate = useNavigate(); // <- Para redirecionar para "/"

  const isAtividades = location.pathname.startsWith('/atividades');
  const isHome = location.pathname === '/' ;
  const isEvent = location.pathname === '/evento/missao-presenca';

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'problem', label: 'O Problema' },
    { id: 'solution', label: 'Nossa Solução' },
    { id: 'team', label: 'A Equipe' },
  
    { id: 'contact', label: 'Contato' },

  ];

  const navItemsAtividades = [
    //{id: 'atividadesInicio', label: 'INICIO'},
    //{id: 'atividadesTv', label: 'GALERIA GALATICA'},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rola para a seção (na mesma página)
  const scrollToSection = (id) => {
  logAnalyticsEvent('select_content', {
    content_type: 'navbar_scroll',
    item_id: id,
  });
  if (id === 'event') {
    navigate('/evento/missao-presenca');
  } else {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  }
  setMobileMenuOpen(false);
};


  // Vai para a home e depois rola até a seção
  const goToSectionFromOtherPage = (id) => {
  logAnalyticsEvent('select_content', {
    content_type: 'navbar_navigate',
    item_id: id,
  });
  if (id === 'event') {
    navigate('/evento/missao-presenca');
  }else if (id === 'atividadesInicio') {
    navigate('/atividades');
  }else if (id === 'atividadesTv') {
    navigate('/atividades/tv');
  }  else {
    navigate(`/#${id}`);
  }
  setMobileMenuOpen(false);
};

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0D1B2A]/90 backdrop-blur-md py-3 shadow-lg' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-4 cursor-pointer" 
          onClick={() => !isHome  ? navigate('/') : scrollToSection('hero')}
        >
          <img src="/assets/images/logo.png" alt="Logo" className="w-15 h-10" />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {(isHome || isEvent ? navItems : navItemsAtividades).map((item) => (
          
            <button
              key={item.id}
              onClick={() =>
                !isHome ? goToSectionFromOtherPage(item.id) : scrollToSection(item.id)
              }
              className={`font-inter transition-all duration-300 hover:text-[#FF4F87] ${
                activeSection === item.id ? 'text-[#FF4F87] font-medium' : 'text-[#F9F9F9]'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Botão “Se junte à missão” — só aparece se a pessoa estiver na rota raiz */}
          {isHome && (
            <button
              onClick={() => {
                logAnalyticsEvent('select_content', { content_type: 'cta', item_id: 'decolar_navbar' });
                navigate('/atividades');
              }}
              className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-2 px-6 rounded transition-all duration-300 font-poppins flex items-center"
            >
              <FaRocket className="mr-2" /> Decolar
            </button>
          )}
        </div>

        {/* Botão do menu mobile */}
        <button 
          className="md:hidden text-[#F9F9F9] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {(isHome || isEvent ? navItems : navItemsAtividades).map((item) => (
          
            <button
              key={item.id}
              onClick={() =>
                !isHome ? goToSectionFromOtherPage(item.id) : scrollToSection(item.id)
              }
              className={`font-inter transition-all duration-300 hover:text-[#FF4F87] ${
                activeSection === item.id ? 'text-[#FF4F87] font-medium' : 'text-[#F9F9F9]'
              }`}
            >
              {item.label}
            </button>
          ))}

            {isHome && (
              <button
                onClick={() => {
                  logAnalyticsEvent('select_content', { content_type: 'cta', item_id: 'decolar_navbar_mobile' });
                  navigate('/atividades');
                }}
                className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-2 px-6 rounded transition-all duration-300 font-poppins flex items-center w-full justify-center mt-4"
              >
                <FaRocket className="mr-2" /> Decolar
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
