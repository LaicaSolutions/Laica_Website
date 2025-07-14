import { useRef } from 'react';
import useContactAnimations from '../../../hooks/useContactAnimations';
import ContactForm from '../../../components/ContactForm';
import SocialLinks from '../../../components/SocialLinks';
import MissionControlInfo from '../../../components/MissionControlInfo';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useContactAnimations(sectionRef, titleRef, formRef);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6">
            Entre em contato com <span className="text-[#FF4F87]">a central de comando da Laica</span>
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Tem perguntas ou quer saber mais sobre nossa missão? Nos envie uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <ContactForm  />
          <div className="flex flex-col justify-center space-y-8">
            <SocialLinks />
            <MissionControlInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
