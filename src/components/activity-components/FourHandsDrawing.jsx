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


const FourHandsDrawing = () => {
  

  return (
    <>
        <div className="mb-4">
            <RandomPhraseGenerator phrases={drawingPrompts}/>
        </div>
        
        <LaicaTimer />

    </>
  );
};

export default FourHandsDrawing;

