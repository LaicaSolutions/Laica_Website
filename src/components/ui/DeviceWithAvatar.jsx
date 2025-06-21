import React from 'react';
import { FaTabletAlt, FaLaptop } from 'react-icons/fa';
import DisconnectedLine from './DisconnectedLine';
const DeviceWithAvatar = () => {
  return (
    
       
        <div className="relative mb-16 flex justify-center">
          <div className="w-full max-w-4xl relative">
            <div className="relative h-64 md:h-80">

              {/* Ícone de tablet com "criança" ao lado */}
              <div className="absolute left-0 top-0 w-24 h-24 md:w-32 md:h-32">
                <div className="w-full h-full rounded-full bg-[#4B3F72]/50 flex items-center justify-center relative overflow-hidden">
                  <div className="w-[90%] h-[90%] rounded-full bg-[#4B3F72]/70 flex items-center justify-center">
                    <FaTabletAlt className="text-[#F9F9F9] text-2xl md:text-3xl" />
                  </div>
                  <div className="absolute top-[10%] right-[10%] w-[20%] h-[20%] rounded-full bg-[#F9F9F9]/20"></div>
                </div>
                <div className="absolute top-[50%] left-[110%] w-16 h-16 md:w-20 md:h-20">
                  <div className="w-full h-full rounded-full bg-[#0D1B2A] border-2 border-[#7fdbda]/30 flex items-center justify-center">
                    <img 
                      src="/assets/images/kid_avatar.jpg" 
                      alt="Child absorbed in device" 
                      className="w-[80%] h-[80%] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Ícone de laptop com "pai/mãe" ao lado */}
              <div className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32">
                <div className="w-full h-full rounded-full bg-[#4B3F72]/50 flex items-center justify-center relative overflow-hidden">
                  <div className="w-[90%] h-[90%] rounded-full bg-[#4B3F72]/70 flex items-center justify-center">
                    <FaLaptop className="text-[#F9F9F9] text-2xl md:text-3xl" />
                  </div>
                  <div className="absolute top-[10%] right-[10%] w-[20%] h-[20%] rounded-full bg-[#F9F9F9]/20"></div>
                </div>
                <div className="absolute top-[5%] right-[110%] w-16 h-16 md:w-20 md:h-20">
                  <div className="w-full h-full rounded-full bg-[#0D1B2A] border-2 border-[#7fdbda]/30 flex items-center justify-center">
                    <img 
                      src="/assets/images/parent_avatar.jpg" 
                      alt="Parent absorbed in device" 
                      className="w-[80%] h-[80%] rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Linha pontilhada simbolizando desconexão */}
              <DisconnectedLine />
            </div>
          </div>
        </div>
        
      
  );
};

export default DeviceWithAvatar;
