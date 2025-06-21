import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TeamMemberCard = ({ member, active, onHover, onLeave }) => {
  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={onLeave}
    >
      <div className="relative w-48 h-48 mb-6 transition-transform duration-500 hover:scale-105">
        {/* Astronaut image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${active ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full rounded-full bg-[#0D1B2A] p-2 border-2 border-[#7FDBDA]/50 overflow-hidden">
            <img src={member.astronautAvatar} alt={`${member.name} as astronaut`} className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-[#7FDBDA]/10 to-transparent"></div>
        </div>

        {/* Real photo on hover */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full rounded-full bg-[#0D1B2A] p-2 border-2 border-[#FF4F87] overflow-hidden">
            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>

      <h3 className="font-baloo text-xl font-bold text-[#F9F9F9] mb-1">{member.name}</h3>
      <p className="font-inter text-[#7FDBDA] mb-3 text-sm">{member.role}</p>

      {/* Motto + Social Links */}
      <div className={`text-center transition-all duration-300 ${active ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <p className="font-inter text-[#F9F9F9]/80 text-sm italic mb-3">"{member.motto}"</p>
        <div className="flex justify-center space-x-3">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#7FDBDA] hover:text-[#FFC857] transition-colors">
              <FaLinkedin size={20} />
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-[#7FDBDA] hover:text-[#FFC857] transition-colors">
              <FaEnvelope size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
