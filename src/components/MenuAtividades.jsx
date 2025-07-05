import { useNavigate } from 'react-router-dom';

const atividades = [
  { nome: 'Pintura Espacial', tipo: 'Solo', dificuldade: 'Fácil', rota: 'pintura-espacial' },
  { nome: 'Missão : Caça espacial', tipo: 'Solo', dificuldade: 'Médio', rota: 'caca-espacial' },
  { nome: 'Desafio da sincronia e ritmo', tipo: 'Solo', dificuldade: 'Médio', rota: 'sincronia-ritmo' },
  { nome: 'Missão : Laica Precisa', tipo: 'Solo', dificuldade: 'Fácil', rota: 'laica-precisa' },
  { nome: 'Desafio da estatua', tipo: 'Solo', dificuldade: 'Difícil', rota: 'desafio-estatua' },
  { nome: 'Base Segura', tipo: 'Solo', dificuldade: 'Difícil', rota: 'base-segura' },
  { nome: 'Desenho a quatro mãos', tipo: 'Dupla', dificuldade: 'Fácil', rota: 'desenho-quatro-maos' },
  { nome: 'Perguntas da tripulação', tipo: 'Dupla', dificuldade: 'Fácil', rota: 'perguntas-tripulacao' },
  { nome: 'História Maluca', tipo: 'Dupla', dificuldade: 'Médio', rota: 'historia-maluca' },
  { nome: 'Entrevista Intergaláctica', tipo: 'Dupla', dificuldade: 'Médio', rota: 'entrevista-intergalactica' },
  { nome: 'Monte seu mundo juntos', tipo: 'Dupla', dificuldade: 'Difícil', rota: 'monte-seu-mundo' },
  { nome: 'Nossos planos juntos', tipo: 'Dupla', dificuldade: 'Difícil', rota: 'nossos-planos' },
];

export default function MenuAtividades() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen ">
        <div className="container mx-auto px-4 lg:px-8 z-10 mt-16">
        <h1 className="font-baloo text-2xl md:text-3xl lg:text-4xl font-bold text-[#F9F9F9] text-center">Escolha uma fita</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-4 py-12">
          {atividades.map((atividade) => (
            <button
              key={atividade.rota}
              onClick={() => navigate(`/atividades/${atividade.rota}`)}
              className="bg-white rounded-2xl shadow-md p-4 text-left hover:bg-indigo-50 transition border-l-4 border-indigo-400"
            >
              <h2 className="text-xl font-semibold text-indigo-700">{atividade.nome}</h2>
              <p className="text-sm text-gray-600">👤 {atividade.tipo} | 🎯 {atividade.dificuldade}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
    
  );
}
