import { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ConexaoSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

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

      // Form animation
      gsap.from(formRef.current, { 
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "back.out(1.7)"
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const formElement = useRef(null); // novo ref para o formulário

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setFormStatus({
      submitted: true,
      error: true,
      message: 'All fields are required!'
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setFormStatus({
      submitted: true,
      error: true,
      message: 'Please enter a valid email address!'
    });
    return;
  }

  emailjs.sendForm(
    'service_063rnqb',
    'template_t6d6jxo',
    formElement.current,
    {
      publicKey: 'glQUySQF788DIjDPY',
    }
  ).then(() => {
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  }).catch((error) => {
    setFormStatus({
      submitted: true,
      error: true,
      message: 'Something went wrong. Please try again.'
    });
    console.error('EmailJS error:', error);
  });
};



  const socialLinks = [
    {
      platform: "Comunidade do WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url: "https://chat.whatsapp.com/DbrGtVBl2Dl19puhhvVkR5",
      color: "hover:text-[#25D366]"
    },
    {
      platform: "Siga no Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/laica.space",
      color: "hover:text-[#E1306C]"
    },
    
  ];

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      

      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            Missão Iniciada com <span className="text-[#FF4F87]">sucesso</span>
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Você agora faz parte da tripulação da Laica.
Enquanto finalizamos os preparativos, junte-se à nossa comunidade e acompanhe os bastidores da missão:
          </p>
        </div>

        <div className="flex items-center justify-center px-4">
          
          
          {/* Social media and contact info */}
          <div className="max-w-2xl w-full">
            <div className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300">
              <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6 text-center">Entre em nossa comunidade</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-[#0D1B2A]/50 p-4 rounded-lg hover:bg-[#0D1B2A]/70 transition-all duration-300"
                  >
                    <div className={`text-[#7FDBDA] ${social.color} transition-colors duration-300 mb-2`}>
                      {social.icon}
                    </div>
                    <span className="font-inter text-[#F9F9F9]">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
            
           
          </div> {/* Social media and contact info */}
        </div>
      </div>
    </div>
  );
};

export default ConexaoSection;