import { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
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
      platform: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/laica.space",
      color: "hover:text-[#E1306C]"
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/company/laicaconexaofamiliar",
      color: "hover:text-[#0077B5]"
    },
    {
      platform: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url: "https://wa.me/message/CW7K3AWF66LJL1",
      color: "hover:text-[#25D366]"
    },
    {
      platform: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:laica.dog.caramelo@gmail.com",
      color: "hover:text-[#FFC857]"
    }
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
            Entre em contato com <span className="text-[#FF4F87]">a central de comando da Laica</span>
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Tem perguntas ou quer saber mais sobre nossa missão? Nos envie uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact form styled like a spaceship dashboard */}
          <div 
            ref={formRef}
            className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300"
          >
            <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6">Envie uma mensagem</h3>
            
            <form ref={formElement} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter text-[#F9F9F9] mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0D1B2A]/70 border border-[#4B3F72]/50 rounded-lg px-4 py-3 text-[#F9F9F9] focus:outline-none focus:border-[#7FDBDA] transition-all duration-300"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-inter text-[#F9F9F9] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0D1B2A]/70 border border-[#4B3F72]/50 rounded-lg px-4 py-3 text-[#F9F9F9] focus:outline-none focus:border-[#7FDBDA] transition-all duration-300"
                  placeholder="Seu endereço de e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-inter text-[#F9F9F9] mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-[#0D1B2A]/70 border border-[#4B3F72]/50 rounded-lg px-4 py-3 text-[#F9F9F9] focus:outline-none focus:border-[#7FDBDA] transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              
              {formStatus.submitted && (
                <div className={`p-3 rounded-lg ${formStatus.error ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-3 px-8 rounded transition-all duration-300 font-poppins flex items-center justify-center space-x-2 w-full md:w-auto"
              >
                <FaPaperPlane />
                <span>Enviar</span>
              </button>
            </form>
          </div>
          
          {/* Social media and contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300">
              <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6">Conecte-se conosco</h3>
              
              <div className="grid grid-cols-2 gap-6">
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
            
            <div className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300">
              <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-4">Nosso controle de missão</h3>
              <p className="font-inter text-[#F9F9F9]/80 mb-2">
                Localizada em São Paulo, Brazil
              </p>
              <p className="font-inter text-[#F9F9F9]/80 mb-2">
                Trabalhando Globalmente para reconectar familias atraves de simples, mas significativas experiencias.
              </p>
              
              <p className='font-inter text-[#F9F9F9]/80'>CNPJ : 61.038.864/0001-97</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;