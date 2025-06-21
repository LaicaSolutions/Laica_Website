import socialLinks from '../data/socialLinks';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const iconMap = {
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
  FaWhatsapp: FaWhatsapp,
  FaEnvelope: FaEnvelope,
};



const SocialLinks = () => {
  return (
    <div className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300">
      <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6">Conecte-se conosco</h3>

      <div className="grid grid-cols-2 gap-6">
            {socialLinks.map((social, index) => {
                const IconComponent = iconMap[social.icon];
                return (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-[#0D1B2A]/50 p-4 rounded-lg hover:bg-[#0D1B2A]/70 transition-all duration-300"
                >
                    <div className={`text-[#7FDBDA] ${social.color} transition-colors duration-300 mb-2`}>
                    <IconComponent size={24} />
                    </div>
                    <span className="font-inter text-[#F9F9F9]">{social.platform}</span>
                </a>
                );
            })}
     </div>
    </div>
  );
};

export default SocialLinks;
