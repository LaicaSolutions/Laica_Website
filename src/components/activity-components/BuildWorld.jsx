import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Question from './Question';


const buildYourWorldQuestions = [
"1. Conceito do mundo",
  "Qual é o nome do mundo que vocês vão criar?",
  "Esse mundo é no espaço, embaixo d’água, no céu ou em outro lugar?",
  "Qual é o tamanho desse mundo? É um planeta, uma ilha, um reino...?",

  " 2. Ambiente e clima",
  "Como é o clima mais comum nesse mundo? Frio, quente, mágico?",
  "Quais são as paisagens mais incríveis que existem lá?",
  "Tem mares, florestas, desertos, montanhas, nuvens sólidas ou algo novo?",

  "3. Habitantes e criaturas",

  "Quem vive nesse mundo? Humanos, animais falantes, robôs, alienígenas?",
  "Como são as criaturas? Têm asas, antenas, quatro olhos?",
  "Qual é o nome de uma criatura especial que só existe nesse mundo?",
  "Como as pessoas ou seres se cumprimentam nesse mundo?",

   "4. Cultura e costumes",
  "O que todos nesse mundo fazem para se divertir?",
  "Qual é a comida mais comum e mais estranha desse lugar?",
  "Existe alguma dança ou música típica?",
  "Como são as roupas das pessoas ou criaturas?",

  "5. Tecnologia e magia",
  "Tem magia, tecnologia ou os dois nesse mundo?",
  "Qual é o objeto mais poderoso ou especial que existe?",
  "Como as pessoas se locomovem? Carros voadores? Bolhas saltitantes?",

  "6. Regras e valores",
  "Qual é a regra mais importante desse mundo?",
  "Existe alguma lei engraçada ou muito diferente?",
  "O que é considerado algo muito valioso nesse mundo (ex: bondade, risada, estrelas)?",

  "7. Aventura e perigos",
  "Existe algum mistério que ninguém conseguiu resolver ainda?",
  "Tem vilões ou perigos? Como são?",
  "Qual é o maior desafio que alguém pode enfrentar nesse mundo?",

  "8. Locais especiais",
  "Qual é o lugar mais mágico ou misterioso do mundo?",
  "Existe um castelo, uma torre ou algo flutuando no céu?",
  "Onde as pessoas se encontram para conversar ou fazer festas?",

  " 9. Heróis e histórias",
  "Existe um herói ou heroína famosa? Qual o nome e poder dela?",
  "Qual é a lenda ou história mais antiga contada pelas pessoas?",
  "Se vocês morassem lá, quem vocês seriam? O que fariam todo dia?",

  "10. Finalização e nome do projeto",
  "Se esse mundo fosse um livro ou um jogo, qual seria o título?",
  "Vocês gostariam de desenhar ou construir esse mundo juntos depois?",
];



const shareText = {
  title: 'Seu universo está pronto para brilhar!',
  description: 'Vocês imaginaram, criaram e montaram um mundo único juntos. Agora é hora de mostrar essa criação incrível para a galáxia!',
  note: 'Compartilhe um desenho, um áudio contando sobre esse mundo ou até uma descrição escrita! Apareça na galeria galáctica!',
  whatsappMessage: 'Criamos nosso próprio mundo juntos com a Laica! Foi uma aventura cheia de ideias malucas e divertidas. Dá uma olhada no que fizemos!',
  link: ''
};



const BuildWorld = () => {
  
  return (
    <>
      <Question questions={buildYourWorldQuestions} sharePrompt={shareText}/>
    </>
      
  );
};

export default BuildWorld;

