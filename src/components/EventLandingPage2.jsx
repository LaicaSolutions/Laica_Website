import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EventLandingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gradient-to-b from-black to-indigo-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Missão Presença: Reconecte-se onde mais importa
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Porque nenhuma mãe deveria se sentir trocada pela rotina.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg"
        >
          Quero garantir minha presença
        </button>
      </section>

      {/* Contexto Emocional */}
      <section className="px-6 py-16 bg-black text-center space-y-6">
        <p className="text-xl italic">Você não está sozinha.</p>
        <motion.p 
          className="text-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          E se o verdadeiro vilão for um mundo que exige demais e acolhe de menos?
        </motion.p>
        <p className="text-lg max-w-2xl mx-auto">
          Nós, mães, não estamos desconectadas, estamos esgotadas. Porque não adianta falar de presença, se a vida exige nossa ausência.
        </p>
      </section>

      {/* Programação */}
      <section className="py-16 px-6 text-center bg-indigo-800">
        <h2 className="text-3xl font-bold mb-10">O que vai acontecer na missão?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {['Oficina criativa', 'Jogos em família', 'Momento de conexão'].map((activity, i) => (
            <motion.div
              key={activity}
              className="bg-white text-black rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="font-bold text-xl mb-2">{activity}</h3>
              <p>Uma atividade feita para fortalecer os laços da tripulação familiar.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investimento */}
      <section className="bg-gradient-to-br from-purple-800 to-indigo-900 py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Aporte para embarcar na missão</h2>
        <p className="text-2xl font-semibold mb-6">R$ 25,00 por família</p>
        <ul className="mb-6 text-lg space-y-2">
          <li>✔ Acesso a todas as atividades</li>
          <li>✔ Kit de bordo</li>
          <li>✔ Certificado estelar</li>
        </ul>
        <button
          onClick={() => setShowForm(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full"
        >
          Confirmar presença e garantir minha vaga
        </button>
      </section>

      {/* Formulário (simples para demonstração) */}
      {showForm && (
        <section className="bg-white text-black py-12 px-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Pré-inscrição</h3>
          <form className="max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
            <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" />
            <input type="number" placeholder="Número de participantes" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full bg-indigo-700 text-white py-3 rounded font-bold">
              Enviar
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
