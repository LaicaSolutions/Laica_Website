import { Link } from 'react-router-dom';
import { Feather, Flame, PlayIcon, Skull, User, Users, ZapIcon } from 'lucide-react';
import { logAnalyticsEvent } from '../services/analytics';
import { Badge } from './ui/badge';

// Componente CassetteTape: Renderiza um card estilizado como uma fita cassete para uma atividade.
// Recebe um objeto `activity` como propriedade, contendo os detalhes da missão.
export function CassetteTape({ activity }) {
  // Mapeia a dificuldade da atividade para uma variante de estilo do componente Badge.
  // Isso permite alterar a aparência do badge com base na dificuldade (Easy, Medium, Hard).
  const difficultyBadgeVariant = {
    easy: 'outline',
    medium: 'outline',
    hard: 'outline',
  };

  // Mapeia a dificuldade para um ícone correspondente.
  // Isso permite exibir um ícone visual que representa o nível de dificuldade.
  const difficultyIcons = {
    easy: <ZapIcon className="mr-1 h-6 w-6" />,
    medium: <div className="flex"><ZapIcon className="mr-1 h-6 w-6" /><ZapIcon className="mr-1 h-6 w-6" /></div>,
    hard: <div className="flex"><ZapIcon className="mr-1 h-6 w-6" /><ZapIcon className="mr-1 h-6 w-6" /><ZapIcon className="mr-1 h-6 w-6" /></div>,
  };

  // O componente inteiro é envolvido por um `Link` do react-router-dom.
  // Ao clicar, o usuário é navegado para a página de detalhes da atividade específica.
  return (
    <Link
      onClick={() => {
        logAnalyticsEvent('select_item', {
          item_list_name: 'Atividades',
          item_id: activity.id,
          item_name: activity.name,
          item_category: activity.type,
        });
      }}
      to={`/atividades/${activity.id}`}
      // Classes de estilização para a transição e foco, melhorando a acessibilidade e a experiência do usuário.
      className="block group transition-transform duration-300 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg"
    >
      {/* Container principal do card com posicionamento relativo para os elementos internos. */}
      <div className="relative rounded-lg p-4 backdrop-blur-sm shadow-lg overflow-hidden border-2 border-accent/20 group-hover:border-accent/40 transition-all duration-300">

        {/* Fundo com gradiente dinâmico. A cor é definida pela propriedade `activity.color`. */}
        {/* `z-0` coloca este elemento no fundo. */}
        <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} z-0`} />

        {/* Camada de sobreposição escura para garantir que o texto seja legível sobre o gradiente. */}
        {/* `z-10` coloca este elemento acima do gradiente, mas abaixo do conteúdo. */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Container do conteúdo, posicionado acima do fundo e da sobreposição com `z-20`. */}
        <div className="relative z-20">
          {/* Cabeçalho com o nome da atividade. */}
          <div className="border-b-2 border-muted/50 pb-2 mb-3">
            <h2 className="font-headline text-2xl text-white truncate">
              {activity.name}
            </h2>
          </div>

          {/* Seção de metadados: Dificuldade e Tipo de atividade (Solo/Grupo). */}
          <div className="flex justify-between items-center text-sm mb-4">
            {/* Badge para a dificuldade, que agora inclui um ícone dinâmico. */}
            <Badge variant={difficultyBadgeVariant[activity.difficulty.toLowerCase()]} className="capitalize flex items-center">
              {/* Renderiza o ícone com base na dificuldade da atividade. 
                  Usamos .toLowerCase() para garantir que o mapeamento funcione mesmo que a propriedade venha com letra maiúscula (ex: "Easy"). */}
              {difficultyIcons[activity.difficulty.toLowerCase()]}
              {/*{activity.difficulty}*/}
            </Badge>
            {/* Badge para o tipo de atividade. */}
            <Badge variant="outline" className="border-white/30 text-white text-center">
              {/* Renderização condicional do ícone: `User` para Solo, `Users` para Grupo. */}
              {activity.type === 'Solo' ? (
                <User className="mr-1 h-6 w-6" />
              ) : (
                <Users className="mr-1 h-6 w-6" />
              )}
              {/*{activity.type}*/}
            </Badge>
          </div>

          {/* Seção que simula a parte central de uma fita cassete. */}
          <div className="bg-white/10 rounded p-2 text-center text-gray-200">
            {/* Simulação dos rolos (spools) da fita. */}
            <div className="flex justify-around items-center h-16">
              <div className="w-10 h-10 bg-black/50 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="w-10 h-10 bg-black/50 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
            {/* Texto decorativo com o ID da atividade, imitando uma etiqueta de cassete. */}
            <p className="mt-2 text-xs font-code tracking-widest text-purple-200">LADO - A / LAICA-M-0{activity.id}</p>
          </div>

          {/* Rodapé do card com a chamada para ação "Load Mission". */}
          <div className="text-center mt-4">
            <p className="font-body text-purple-200 group-hover:text-white transition-colors flex items-center justify-center">
              Tocar a fita <PlayIcon className="ml-2 h-4 w-4" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
