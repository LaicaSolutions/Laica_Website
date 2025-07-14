import { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane, FaRocket } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';
import { salvarPreCadastro } from '../../../services/preCadastroService';

gsap.registerPlugin(ScrollTrigger);

const PreRegisterSection = () => {


  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

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

  //const navigate = useNavigate(); // <- Para redirecionar para "/conecte"

  //form animation
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



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    whatsappConsent: false
  });
  
  const [status, setStatus] = useState('');

  

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


//input phone
const [phone, setPhone] = useState('');
const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número

    // Aplica máscara (99) 99999-9999
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    }

    setPhone(value);
    setError(''); // Limpa o erro enquanto digita
  };

  const validatePhone = () => {
    const isValid = /^\(\d{2}\)\s\d{5}-\d{4}$/.test(phone);
    if (!isValid) {
      setError('Número de telefone inválido. Use o formato (99) 99999-9999');
    } else {
      setError('');
    }
  };

//input email
const [emailError, setEmailError] = useState('');
const validateEmail = () => {
  if (!formData.email) {
    setEmailError('Email é obrigatório');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setEmailError('Formato de e-mail inválido');
    return false;
  }

  setEmailError('');
  return true;
};

//input name
const [nameError, setNameError] = useState('');
const validateName = () => {
  if (!formData.name.trim()) {
    setNameError('Nome é obrigatório');
    return false;
  }

  setNameError('');
  return true;
};



const formElement = useRef(null); // novo ref para o formulário

const [formError, setFormError] = useState('');


const handleSubmit = async e => {
  e.preventDefault();

  const isValidName = validateName();
  const isValidPhone = /^\(\d{2}\)\s\d{5}-\d{4}$/.test(phone);
  const isValidEmail = validateEmail();

  if (!isValidPhone) {
    setError('Número de telefone inválido. Use o formato (99) 99999-9999');
  }

  if (!isValidEmail || !isValidPhone || !isValidName) {
    return;
  }

  setError('');
  setStatus('Salvando...');
  setFormError('');

  try {
    const dadosParaSalvar = {
      ...formData,
      cellphone: phone,
      whatsappConsent: !!formData.whatsappConsent,
    };
    console.log(dadosParaSalvar)

    await salvarPreCadastro(dadosParaSalvar);

    setStatus('Cadastro salvo com sucesso!');
    setSuccess(true);  // <-- Marca como sucesso
  } catch (error) {
    console.error('Erro ao salvar pré-cadastro:', error);
    setFormError(error.message || 'Erro ao salvar cadastro.');
    setStatus('');
  }
};







  

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      
      <div className="container mx-auto px-4 z-10">
        {success ? ( <>
          <div className="text-center mb-16">
          <h2 
          
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
        </div></>): (<>
        <div className="text-center mt-10 mb-10">
          <h2 
            ref={titleRef}
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            Prepare-se para <span className="text-[#FF4F87]">decolagem</span>
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            Nossa plataforma está em fase final de construção...Mas você pode garantir acesso antecipado e benefícios exclusivos ao se cadastrar como nosso tripulante fundador
          </p>
        </div>

        <div className="flex items-center justify-center px-4">
            <div className="max-w-2xl w-full">

                {/* Contact form styled like a spaceship dashboard */}
                <div 
                ref={formRef}
                className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300"
                >
                <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6 text-center">Faça seu pré-cadastro</h3>
                
                <form ref={formElement} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block font-inter text-[#F9F9F9] mb-2">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={validateName}
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
                        onBlur={validateEmail}
                        className="w-full bg-[#0D1B2A]/70 border border-[#4B3F72]/50 rounded-lg px-4 py-3 text-[#F9F9F9] focus:outline-none focus:border-[#7FDBDA] transition-all duration-300"
                        placeholder="Seu endereço de e-mail"
                    />
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>

                    <div>
                        <label htmlFor="cellphone" className="block font-inter text-[#F9F9F9] mb-2">Telefone</label>
                        <input
                            type="tel"
                            id="cellphone"
                            name="cellphone"
                            value={phone}
                            onChange={handlePhoneChange}
                            onBlur={validatePhone}
                            placeholder="Seu número de celular"
                            className={`w-full bg-[#0D1B2A]/70 border ${error ? 'border-red-500' : 'border-[#4B3F72]/50'} rounded-lg px-4 py-3 text-[#F9F9F9] focus:outline-none focus:border-[#7FDBDA] transition-all duration-300`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>

                     {/* Checkbox de permissão */}
                    <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        id="whatsappConsent"
                        name="whatsappConsent"
                        checked={formData.whatsappConsent}
                        onChange={(e) =>
                        setFormData({ ...formData, whatsappConsent: e.target.checked })
                        }
                        className="mr-2 accent-[#FF4F87] w-5 h-5"
                    />
                    <label htmlFor="whatsappConsent" className="text-[#F9F9F9] text-sm font-inter">
                        Aceito receber notificações por WhatsApp
                    </label>
                    </div>

                   
                    <div className="flex justify-center mt-6">
                        
                                <button
                            type="submit"
                            className=" bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A] font-bold py-3 px-8 rounded transition-all duration-300 font-poppins flex items-center justify-center space-x-2 w-full md:w-auto"
                            >
                            <FaRocket />
                            <span>Quero Embarcar</span>
                            </button>
                    </div>
                    <div className="flex justify-center mt-6">
                        {formError && (
                            <p className="text-red-500 text-center text-sm font-inter mb-2">
                              {formError}
                            </p>
                          )}
                              
                    </div>
                    
                </form>
                </div>
            </div>
            </div></>
          )}

      </div>
    </div>
  );
};

export default PreRegisterSection;