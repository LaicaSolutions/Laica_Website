import { useRef, useState } from 'react';
import TeamMemberCard from '../../../components/TeamMemberCard';
import { useTeamSectionAnimations } from '../../../hooks/useTeamSectionAnimations';
import teamMembers from '../../../data/teamData'; // valores do time


const TeamSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const teamRef = useRef(null);
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  useTeamSectionAnimations(sectionRef, titleRef, teamRef);

  

  const handleHover = (id) => setActiveTeamMember(id);
  const handleLeave = () => setActiveTeamMember(null);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
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
        {/* Title */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6">
            Conheça <span className="text-[#FF4F87]">a equipe</span> por trás da missão
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Somos uma equipe de pais, designers e engenheiros apaixonados por criar conexões familiares significativas na era digital.
          </p>
        </div>

        {/* Team grid */}
        <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              active={activeTeamMember === member.id}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
