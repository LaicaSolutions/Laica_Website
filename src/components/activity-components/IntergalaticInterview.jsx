import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RandomPhraseGenerator from './RandomPhraseGenerator';
import Question from './Question';

const characters = [
  "Um dinossauro que tem medo de espirrar",
  "Um astronauta perdido em Marte",
  "Uma fada que só fala rimando",
  "Um pirata que esquece tudo",
  "Um cachorro que virou cantor",
  "Um robô que adora dançar",
  "Um cientista maluco do espaço",
  "Uma árvore que conta histórias",
  "Um gato que acha que é rei",
  "Um urso que ama fazer cupcakes",
  "Um polvo professor de matemática",
  "Um dragão que tem cócegas",
  "Um ET que ama chocolate",
  "Uma bruxa que esqueceu suas magias",
  "Um pinguim que quer morar no deserto",
  "Um leão que tem medo de baratas",
  "Uma princesa que virou detetive",
  "Um jacaré muito educado",
  "Um coelho com pressa para tudo",
  "Um vampiro que só toma suco de uva",
  "Um peixe que quer aprender a voar",
  "Um mago que perdeu sua varinha",
  "Um rato superespião",
  "Um dragão bebê que ainda não sabe cuspir fogo",
  "Uma sereia que quer virar humana",
  "Um zumbi muito simpático",
  "Um tubarão que faz balé",
  "Um lobo que virou vegetariano",
  "Um cavalo que só anda de skate",
  "Um polvo que é cabeleireiro",
  "Uma abelha que tem medo de flores",
  "Um gnomo que nunca para de rir",
  "Uma múmia que adora fazer amigos",
  "Um gato ninja",
  "Um robô com soluço",
  "Um esquilo inventor",
  "Uma estrela do mar que sonha em ser famosa",
  "Um camaleão que muda de cor conforme a emoção",
  "Um livro mágico que fala sozinho",
  "Uma tartaruga velocista",
  "Um balão falante",
  "Um sapo que quer ser astronauta",
  "Um guarda-chuva que conta piadas",
  "Um foguete que tem medo de voar",
  "Um dinossauro que mora no presente",
  "Um pinguim que virou chef de cozinha",
  "Uma girafa que ama usar chapéus",
  "Um ursinho de pelúcia mágico",
  "Um marciano que ama abraçar",
  "Uma lousa que canta quando é usada"
];

const interviewQuestions = [
  "Qual foi o momento mais divertido da sua vida?",
  "Se você tivesse que ensinar algo muito importante, o que seria?",
  "O que te deixa com cócegas na barriga de tanto rir?",
  "Você já ficou muito bravo? O que aconteceu?",
  "Como é um dia perfeito para você?",
  "Se pudesse fazer qualquer coisa hoje, o que escolheria?",
  "Você tem um segredo? Pode contar só um pedacinho?",
  "Como você mostra que ama alguém?",
  "O que faz você se sentir corajoso?",
  "Se você pudesse mudar uma regra do mundo, qual mudaria?"
];

const shareText = {
  title: 'Vocês deram um show de atuação!',
  description: 'A entrevista intergaláctica foi um sucesso — cheia de vozes engraçadas, respostas criativas e muita imaginação!',
  note: 'Compartilhe esse momento com outras famílias e inspire mais aventuras cósmicas!',
  whatsappMessage: 'Acabamos de fazer a atividade "Entrevista Intergaláctica" da Laica! Rimos muito com as respostas e foi um ótimo jeito de brincar juntos. Super recomendamos!',
  link: ''
};



const IntergalaticInterview = () => {
  
  return (
    <>
    
        <div className='mb-4'>
            <RandomPhraseGenerator phrases={characters} />
        </div>
      
      <Question questions={interviewQuestions} sharePrompt={shareText} />

    </>
      
  );
};

export default IntergalaticInterview;
