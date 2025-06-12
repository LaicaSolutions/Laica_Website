import { useEffect, useRef, useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const teamRef = useRef(null);
  
  // State to track which team member's info is being shown
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, { 
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1
      });

      // Team members animation
      gsap.from(teamRef.current.children, { 
        opacity: 0,
        y: 50,
        stagger: 0.15,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "back.out(1.7)"
      });
      
      // Floating animation for astronauts
      teamRef.current.childNodes.forEach((child, index) => {
        gsap.to(child, {
          y: `-=${10 + index * 5}`,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Bianca Rodrigues",
      role: "Co-founder & CMO",
      avatar: "/assets/images/bianca.png",
      astronautAvatar: "/assets/images/astronaut1.png",
      motto: "Cada plano meu começa com uma pergunta: ‘Como fazemos diferente?",
      linkedin: "",
      email: "bia.alrod@gmail.com"
    },
    {
      id: 2,
      name: "Gabriel Medeiros",
      role: "Founder & CEO",
      avatar: "/assets/images/gabs.png",
      astronautAvatar: "/assets/images/astronaut2.jpg",
      motto: "Guiando o time pelas estrelas com os pés no chão.",
      linkedin: "https://www.linkedin.com/in/gabriel-medeiros-alvarenga-b17267166/",
      email: "gabriel.alva@alumni.usp.br"
    },
    {
      id: 3,
      name: "Vitória Durazzo",
      role: "Co-founder & CTO",
      avatar: "/assets/images/vitoria.png",
      astronautAvatar: "/assets/images/astronaut3.jpg",
      motto: "Conectando constelações de informação para criar novos mundos.",
      linkedin: "https://www.linkedin.com/in/vitoria-durazzo/",
      email: "marividurazzo@gmail.com"
    },
    {
      id: 4,
      name: "Lucas Pierre",
      role: "Co-founder & COO",
      avatar: "/assets/images/lucas.png",
      astronautAvatar: "/assets/images/astronaut4.jpg",
      motto: "Cada clique, uma experiência — cada pixel, uma emoção.",
      linkedin: "https://www.linkedin.com/in/lucaspierrevisnevschifonseca/",
      email: "lucas.fonseca1032@gmail.com"
    }
  ];

  const handleTeamMemberHover = (id) => {
    setActiveTeamMember(id);
  };

  const handleTeamMemberLeave = () => {
    setActiveTeamMember(null);
  };

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`
            }}
          ></div>
        ))}
      </div>
      
      {/* Planet backdrop */}
      <div className="absolute right-[-20%] top-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#4B3F72]/20 to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            Conheça <span className="text-[#FF4F87]">a equipe</span> por trás da missão
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Somos uma equipe de pais, designers e engenheiros apaixonados por criar conexões familiares significativas na era digital.
          </p>
        </div>

        <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="flex flex-col items-center"
              onMouseEnter={() => handleTeamMemberHover(member.id)}
              onMouseLeave={handleTeamMemberLeave}
            >
              <div className="relative w-48 h-48 mb-6 transition-transform duration-500 hover:scale-105">
                {/* Astronaut image */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTeamMember === member.id ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-full h-full rounded-full bg-[#0D1B2A] p-2 border-2 border-[#7FDBDA]/50 overflow-hidden">
                    <img 
                      src={member.astronautAvatar} 
                      alt={`${member.name} as astronaut`} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-[#7FDBDA]/10 to-transparent"></div>
                </div>
                
                {/* Real photo on hover */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTeamMember === member.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-full h-full rounded-full bg-[#0D1B2A] p-2 border-2 border-[#FF4F87] overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              <h3 className="font-baloo text-xl font-bold text-[#F9F9F9] mb-1">{member.name}</h3>
              <p className="font-inter text-[#7FDBDA] mb-3 text-sm">{member.role}</p>
              
              {/* Personal motto and social links - visible on hover */}
              <div 
                className={`text-center transition-all duration-300 ${
                  activeTeamMember === member.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <p className="font-inter text-[#F9F9F9]/80 text-sm italic mb-3">
                  "{member.motto}"
                </p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#7FDBDA] hover:text-[#FFC857] transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-[#7FDBDA] hover:text-[#FFC857] transition-colors"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;