import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const eventData = {
  "missao-conexao-sao-paulo": {
    title: "Missão Conexão – São Paulo",
    subtitle: "Um reencontro cósmico entre pais e filhos.",
    date: "22 de junho de 2025",
    time: "14h às 17h",
    location: "Parque do Ibirapuera, São Paulo – SP",
    mapLink: "https://maps.google.com/?q=Parque+do+Ibirapuera",
    description:
      "Participe de uma jornada intergaláctica com oficinas criativas, rodas de conversa e momentos lúdicos para fortalecer os vínculos familiares.",
    highlights: [
      "Oficina de foguetes recicláveis",
      "Missão de escuta ativa entre pais e filhos",
      "Brincadeiras cooperativas",
      "Meditação estelar para crianças",
    ],
    benefits: [
      "Desconecte-se do digital, reconecte-se com o essencial.",
      "Atividades pensadas para vínculos duradouros.",
      "Momentos que criam memórias para toda a tripulação.",
    ],
  },
};

export default function EventLandingPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const selectedEvent = eventData[slug];
    if (selectedEvent) {
      setEvent(selectedEvent);
      document.title = `${selectedEvent.title} | Laica`;
    }
  }, [slug]);

  if (!event) return <p>Evento não encontrado.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1B2A] via-[#1C2541] to-[#0D1B2A] text-white font-inter">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFC857]">{event.title}</h1>
        <p className="text-lg md:text-xl mt-4 text-[#F9F9F9]">{event.subtitle}</p>
        <p className="mt-6 text-sm text-[#7FDBDA]">🗓 {event.date} • ⏰ {event.time}</p>
        <p className="mt-1 text-sm text-[#7FDBDA]">📍 {event.location}</p>
        <a
          href="#form"
          className="inline-block mt-8 px-6 py-3 bg-[#FFC857] text-[#0D1B2A] font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Quero participar da missão
        </a>
      </section>

      {/* Sobre o Evento */}
      <section className="bg-[#1C2541] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7FDBDA] mb-4">🚀 O que vai acontecer nessa missão?</h2>
          <p className="mb-6 text-[#F9F9F9]">{event.description}</p>
          <ul className="space-y-2 pl-4 list-disc text-[#F9F9F9]">
            {event.highlights.map((item, index) => (
              <li key={index}>🛰 {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7FDBDA] mb-6">🌟 Por que embarcar?</h2>
          <div className="grid gap-4">
            {event.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-[#4B3F72] p-4 rounded-xl shadow-md border-l-4 border-[#FFC857]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="form" className="bg-[#0D1B2A] py-12 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#7FDBDA] mb-4 text-center">📨 Pronto para embarcar?</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Tripulação registrada com sucesso! 🚀");
            }}
          >
            <input
              type="text"
              placeholder="Nome completo"
              required
              className="w-full p-3 rounded bg-[#1C2541] text-white border border-[#4B3F72]"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full p-3 rounded bg-[#1C2541] text-white border border-[#4B3F72]"
            />
            <input
              type="tel"
              placeholder="Telefone"
              className="w-full p-3 rounded bg-[#1C2541] text-white border border-[#4B3F72]"
            />
            <input
              type="number"
              placeholder="Número de pessoas"
              className="w-full p-3 rounded bg-[#1C2541] text-white border border-[#4B3F72]"
            />
            <textarea
              placeholder="Observações"
              className="w-full p-3 rounded bg-[#1C2541] text-white border border-[#4B3F72]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#FFC857] text-[#0D1B2A] font-bold rounded-full hover:scale-105 transition"
            >
              Confirmar presença
            </button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-6 text-sm text-[#7FDBDA]">
        Laica © {new Date().getFullYear()} – Explorando conexões reais 🚀
      </footer>
    </div>
  );
}
