import React, { useMemo } from 'react';
import { usePausableTimer } from '../../hooks/usePausableTimer';
import LaicaTimer from './LaicaTimer';
import RandomPhraseGenerator from './RandomPhraseGenerator';


const drawingPrompts = [
  "Algo que não existe, mas você queria muito encontrar",
  "Dois bichos misturados em um só — bem diferente!",
  "Um lugar que só aparece quando você fecha os olhos",
  "Um som transformado em desenho colorido",
  "O que você imagina quando pensa em 'liberdade'?",
  "Um segredo que mora escondido nas nuvens",
  "Como seria um abraço se fosse um desenho?",
  "O que aparece num lago mágico quando você sonha",
  "A casa de alguém que mora dentro de um livro",
  "O que a escuridão esconde quando ninguém está vendo",
  "Como é um pensamento feliz na sua cabeça?",
  "O que tem depois da última estrela do céu",
  "Um caminho que muda sempre que alguém pisa",
  "Como seria o vento se ele tivesse forma?",
  "O rosto de um sentimento que só você conhece",
  "Uma invenção que ninguém criou ainda, só você",
  "Um planeta onde todo mundo vive dando risada",
  "A casa de um monstrinho gentil e imaginário",
  "Algo que nasce no silêncio bem quietinho",
  "Uma ponte que liga dois mundos invisíveis",
  "Como é o cheiro da infância em desenho?",
  "Algo que só aparece quando todos estão dormindo",
  "O que um coração sonha quando está bem feliz",
  "Uma lembrança que parece real, mas você inventou",
  "As cores que dançam quando você fecha os olhos",
  "O lugar secreto onde o tempo se esconde",
  "Como seria a alma de uma árvore bem antiga?",
  "O que acontece dentro de uma lágrima de alegria",
  "Um abraço entre o sol e a lua",
  "Como é o som do universo por dentro?",
  "O que mora dentro de um raio de sol?",
  "O que um coração sonha quando está bem feliz",
  "Uma lembrança que parece real, mas você inventou",

  "Um lugar onde o tempo anda ao contrário",
  
  "O rastro que uma ideia deixa no ar",
  "Um jardim cheio de pensamentos esquecidos",
  "Quem cuida das lembranças felizes?",
  "Como é a coragem quando ninguém está olhando?",
  "Um caminho que leva pra dentro do seu coração",
  "Um castelo onde moram palavras que não foram ditas",
  "Como seria o abraço do universo inteiro?",
  "O lugar secreto de uma estrela cadente",
 
  "Como desenhar algo que ninguém pode ver?",
  "Duas emoções diferentes dançando juntas",
 
  "O ninho onde nascem as histórias",
  "Um bicho que só aparece nos dias de chuva",
 
  "Como é uma gota de tempo?",
  "Um mundo onde tudo é leve como uma pluma",
  "A sombra de um pensamento bonito",

  "Um sonho feito de papel e vento",
  "Uma porta mágica para um lugar onde tudo pode acontecer",
  "O universo todinho dentro de um grão de areia",
  "O que acontece quando dois sentimentos se abraçam",

  "Um planeta onde as árvores contam histórias"
];

 const shareText = {
      title: 'Obra de Arte em Dupla!',
      description: 'Vejam só a incrível criação que vocês fizeram juntos! Compartilhem e inspirem outras duplas.',
      note: 'As criações mais sincronizadas podem aparecer na nossa Galeria Galáctica!',
      whatsappMessage: 'Fizemos a atividade "Linhas que se Encontram" da Laica e o resultado foi demais!',
    }

const FourHandsDrawing = ({ activity }) => {
  

  return (
    <div className="relative">
      {/* Efeito de grade no fundo */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* Conteúdo da atividade */}
      <div className="relative z-10">
        <div className="mb-4">
            <RandomPhraseGenerator phrases={drawingPrompts}/>
        </div>
          
        <LaicaTimer mode="countdown" initialTime={300} sharePrompt={shareText} pauseInterval={30} />
      </div>
    </div>
  );
};

export default FourHandsDrawing;
