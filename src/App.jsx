import { useEffect, useRef } from 'react';

import Navbar from './components/Navbar';


import StarryBackground from './components/StarryBackground';
import { initSmoothScrolling } from './utils/smoothScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CommunityPopup from './components/CommunityPopup';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize ScrollTrigger with app container
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    
    <div 
      ref={appRef}
      className="relative min-h-screen bg-[#0D1B2A] text-[#F9F9F9] font-inter overflow-hidden"
    >
      <StarryBackground />
      
      
      <BrowserRouter>
      <Navbar />
      <CommunityPopup />
        <AppRoutes />
      </BrowserRouter>
      
      

      <footer className="relative z-10 py-6 text-center text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Laica. Todos os direitos reservados.</p>
          <p className="text-[#FF4F87] mt-1">Reconectando familias, um momento de cada vez.</p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;