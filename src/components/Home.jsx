// src/pages/Home.jsx
import React from 'react';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import TeamSection from './TeamSection';
import TimelineSection from './TimelineSection';
import ContactSection from './ContactSection';
import SectionDivider from './SectionDivider';
const Home = () => {
  return (
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
  );
};

export default Home;
