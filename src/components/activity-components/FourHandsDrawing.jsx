import React, { useMemo } from 'react';
import { usePausableTimer } from '../../hooks/usePausableTimer';
import LaicaTimer from './LaicaTimer';
import RandomPhraseGenerator from './RandomPhraseGenerator';


const drawingPrompts = [
  "Algo que nunca existiu, mas você adoraria encontrar",
  "Uma mistura de dois animais improváveis",
  "Um lugar que só aparece quando você fecha os olhos",
  "Um som transformado em forma e cor",
  "O que você vê quando pensa na palavra 'liberdade'",
  "Um segredo que vive escondido nas nuvens",
  "Como seria um abraço em forma de desenho?",
  "O reflexo de um sonho num lago mágico",
  "A casa de alguém que mora dentro de um livro",
  "O que a escuridão esconde quando ninguém está olhando",
  "Como se parece um pensamento feliz?",
  "O que existe atrás da última estrela do céu",
  "Um caminho que muda cada vez que alguém pisa",
  "A forma que o vento teria se pudesse ser desenhado",
  "O rosto de um sentimento que você inventou",
  "Uma invenção que ainda não foi criada",
  "Como seria um planeta que só conhece risadas",
  "O lar de uma criatura imaginária gentil",
  "O que nasce no silêncio mais profundo",
  "Uma ponte entre dois mundos invisíveis",
  "O cheiro da infância transformado em imagem",
  "Algo que só aparece quando todos dormem",
  "O que um coração sonha quando bate mais forte",
  "Uma memória que não existe, mas parece real",
  "A dança de cores que você vê com os olhos fechados",
  "O esconderijo preferido do tempo",
  "Como seria a alma de uma árvore milenar?",
  "O que acontece dentro de uma lágrima de alegria",
  "Uma amizade entre o sol e a lua",
  "O som do universo visto por dentro",
   "O que mora dentro de um raio de sol",
  "Uma criatura feita só de sorrisos",
  "A primeira coisa que nasceu no mundo",
  "Um lugar onde o tempo caminha de trás para frente",
  "Como é um sonho quando ele acorda",
  "O rastro que uma ideia deixa no ar",
  "O jardim de pensamentos esquecidos",
  "O guardião das lembranças boas",
  "A forma da coragem quando ninguém vê",
  "O caminho que leva para dentro de si",
  "O castelo onde vivem as palavras não ditas",
  "Como seria o abraço do universo",
  "O esconderijo de uma estrela cadente",
  "O som que uma cor faria se pudesse cantar",
  "O retrato de algo invisível",
  "A dança de duas emoções diferentes",
  "A ponte entre um desejo e a realidade",
  "O ninho onde nascem as histórias",
  "Um animal que só aparece em dias de chuva",
  "O rosto da saudade transformada em carinho",
  "Como seria uma gota de tempo",
  "Um mundo onde tudo é leve como pluma",
  "A sombra de um pensamento bonito",
  "A forma da alegria antes de nascer",
  "Um sonho feito de papel e vento",
  "A porta para um lugar onde tudo é possível",
  "O universo dentro de um grão de areia",
  "O que acontece quando dois sentimentos se abraçam",
  "O vestígio de um sorriso deixado no ar",
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
