import { FaPaperPlane } from 'react-icons/fa';
import useContactForm from '../hooks/useContactForm';

const ContactForm = ({ externalFormRef }) => {
  const { formData, formStatus, handleChange, handleSubmit, formRef } = useContactForm();


  return (
    <div
      className="bg-gradient-to-br from-[#0D1B2A]/90 to-[#4B3F72]/20 backdrop-blur-sm border border-[#7FDBDA]/30 rounded-xl p-8 hover:border-[#7FDBDA]/50 transition-all duration-300"
    >
      <h3 className="font-baloo text-2xl font-bold text-[#7FDBDA] mb-6">Envie uma mensagem</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
  );
};

export default ContactForm;
