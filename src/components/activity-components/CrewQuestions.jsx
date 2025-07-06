import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Question from './Question';

const questions = [
  "Se você fosse um planeta, qual seria e por quê?",
  "Você prefere explorar o fundo do mar ou o espaço sideral?",
  "Qual superpoder você daria para a pessoa ao seu lado?",
  "Se a nossa família fosse uma tripulação de nave espacial, qual seria a função de cada um?",
  "Qual é a coisa mais engraçada que já aconteceu com vocês juntos?",
  "Se você pudesse inventar um animal, como ele seria?",
  "Qual seria o nome da nossa nave espacial?",
  "Se cada emoção fosse uma cor, que cor seria a alegria?",
  "Se pudéssemos morar em um castelo voador, onde ele viajaria?",
  "Se tivesse uma varinha mágica, o que você faria primeiro?",
  "Se pudesse escolher um nome secreto para nossa família, qual seria?",
  "Qual bicho seria o protetor da nossa família em uma aventura?",
  "Se você tivesse um robô ajudante, o que ele faria por você?",
  "Se nossa casa virasse um brinquedo gigante, o que teria dentro?",
  "Se você pudesse criar um planeta só para brincar, como seria?",
  "Qual seria o uniforme da nossa equipe de heróis?",
  "Se pudesse dar um presente invisível para alguém, o que daria?",
  "Se nossos sonhos virassem um filme, que cena apareceria primeiro?",
  "Se você tivesse uma mochila mágica, o que colocaria dentro?",
  "Se uma estrela pudesse te dar um conselho, o que ela diria?",
  "Qual som representa um dia feliz para você?",
  "Se nossa família fosse um time de super-heróis, qual seria o seu poder?",
  "Se você fosse um personagem de videogame, o que faria?",
  "Se pudesse desenhar o céu, como ele seria hoje?",
  "Qual seria a senha secreta para entrar na nossa nave?",
  "Se cada pessoa da família fosse um doce, qual seria?",
  "Se você encontrasse um dragão amigo, o que fariam juntos?",
  "Se você pudesse mudar as cores do mundo por um dia, que cores escolheria?",
  "Qual seria sua missão especial em uma galáxia distante?",
  "Se sua risada fosse mágica, o que ela causaria?",
  "Se nosso sofá fosse um meio de transporte, onde iríamos agora?",
  "Se um animal da floresta te chamasse para uma aventura, o que você levaria?",
  "Qual poder você usaria para ajudar alguém que ama?",
  "Se você criasse uma escola de magia, o que ensinaria nela?",
  "Se um balão te levasse para outro mundo, como ele seria?",
  "Se os brinquedos ganhassem vida por um dia, o que vocês fariam?",
  "Qual música você cantaria se estivesse em uma nave viajando entre estrelas?",
  "Se cada sentimento fosse um planeta, qual você gostaria de visitar hoje?",
  "Se você pudesse criar um feriado para a nossa família, o que faríamos?",
  "Se você virasse um monstrinho do bem, como assustaria o mau humor?",
  "Se um mapa do tesouro levasse à nossa casa, o que seria o tesouro?",
  "Se você encontrasse uma porta secreta em casa, onde ela levaria?",
  "Se uma planta falasse com você, o que ela contaria?",
  "Se sua sombra pudesse te dar conselhos, o que ela falaria agora?",
  "Se você tivesse que construir uma nave só com coisas da sua mochila, o que usaria?",
  "Se você e eu trocássemos de lugar por um dia, o que faria primeiro?",
  "Se cada memória fosse uma estrela, qual você escolheria guardar no céu?",
  "Se um arco-íris levasse para um lugar mágico, como ele seria?",
  "Se o amor fosse uma invenção, como ele funcionaria na sua versão?"
];


const CrewQuestions = () => {
  
  return (
    <>
      <Question questions={questions} />
    </>
      
  );
};

export default CrewQuestions;

