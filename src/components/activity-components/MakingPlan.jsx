import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Question from './Question';


export const familyPlanningQuestions = [
  "Qual foi o último momento divertido que tivemos em família?",
  "Se pudéssemos repetir um momento juntos, qual seria?",
  "O que queremos fazer dessa vez juntos?",
  "Preferimos algo dentro de casa ou ao ar livre?",
  "Queremos um momento mais calmo ou mais agitado?",
  "Qual lugar seria perfeito para isso?",
  "O que não pode faltar nesse momento especial?",
  "Vamos precisar preparar alguma coisa antes? Como o quê?",
  "Quem da família gostaríamos de convidar para participar?",
  "Que tipo de roupa devemos usar para esse momento?",
  "Vai ser de manhã, à tarde ou à noite?",
  "Quanto tempo queremos que esse momento dure?",
  "Vamos precisar levar algo com a gente? O quê?",
  "Qual música combinaria com nosso plano?",
  "Vamos incluir comida ou lanche? Qual seria?",
  "Teremos alguma brincadeira ou jogo especial?",
  "Queremos incluir alguma atividade criativa, como desenhar, construir ou inventar algo?",
  "Tem algo novo que gostaríamos de experimentar juntos?",
  "Como deixaremos o ambiente mais divertido ou acolhedor?",
  "Quem faz o quê? Como cada um pode ajudar no plano?",
  "Vamos registrar esse momento com foto, vídeo ou desenho?",
  "Qual será o nome do nosso momento em família?",
  "O que queremos sentir durante esse momento?",
  "Se algo não sair como o esperado, o que faremos?",
  "O que queremos lembrar desse dia quando ele acabar?",
  "Vamos querer repetir esse plano outro dia?",
  "Qual é a parte mais legal do nosso plano?",
  "Tem algo que precisamos evitar para tudo dar certo?",
  "Como vamos contar para a família o que estamos planejando?",
  "Estamos prontos para viver esse momento juntos?"
];



const shareText = {
  title: 'Uma missão planejada com amor!',
  description: 'Vocês criaram um momento especial em família — com ideias, vontades e sonhos juntos. Isso é incrível!',
  note: 'Compartilhe como ficou o plano de vocês: pode ser uma foto do planejamento, um desenho, um áudio contando a ideia… Quem sabe ele vira inspiração para outras famílias ou até um evento real da Laica!',
  whatsappMessage: 'Planejamos nosso momento em família com a Laica e foi demais! Imaginamos juntos o lugar, o que fazer, como nos sentir… Dá uma olhada no que preparamos!',
  link: ''
};


const MakingPlan = () => {
  
  return (
    <>
      <Question questions={familyPlanningQuestions} sharePrompt={shareText}/>
    </>
      
  );
};

export default MakingPlan;

