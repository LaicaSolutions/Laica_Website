import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import SectionDivider from './components/SectionDivider';
import StarryBackground from './components/StarryBackground';
import { initSmoothScrolling } from './utils/smoothScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      <Navbar />
      
      <main className="relative z-10">
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>

        <SectionDivider type="wavy" />
        
        <section id="problem" className="min-h-screen">
          <ProblemSection />
        </section>

        {/*<SectionDivider type="dotted" />*/}
        
        <section id="solution" className="min-h-screen">
          <SolutionSection />
        </section>

        <SectionDivider type="wavy" />
        
        <section id="team" className="min-h-screen">
          <TeamSection />
        </section>

       
        
        

        <SectionDivider type="wavy" />
        
        <section id="contact" className="min-h-screen">
          <ContactSection />
        </section>
      </main>

      <footer className="relative z-10 py-6 text-center text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Laica. Todos os direitos reservados.</p>
          <p className="text-[#7FDBDA] mt-1">Reconectando familias, um momento de cada vez.</p>
          
        </div>
      </footer>
    </div>
  );
}

export default App;