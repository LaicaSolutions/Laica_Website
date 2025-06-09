// Importa a biblioteca GSAP e o plugin ScrollTrigger
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registra o plugin ScrollTrigger no GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * Função genérica para animar qualquer elemento com várias opções
 * @param {HTMLElement|NodeList|string} element - Elemento(s) a ser(em) animado(s)
 * @param {Object} options - Opções de animação
 */
export const animateElement = (element, options = {}) => {
  // Valores padrão da animação
  const defaults = {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    delay: 0,
    ease: "power3.out",
    scrollTrigger: false
  };

  // Mescla as opções passadas com os valores padrão
  const config = { ...defaults, ...options };

  // Se scrollTrigger for ativado, cria animação com ativação por rolagem
  if (config.scrollTrigger) {
    return gsap.to(element, {
      ...config,
      scrollTrigger: {
        trigger: typeof config.scrollTrigger === 'boolean' ? element : config.scrollTrigger,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Caso contrário, executa animação direta
  return gsap.to(element, config);
};

/**
 * Anima elementos de texto caractere por caractere
 * @param {HTMLElement|NodeList|string} element - Elemento de texto a animar
 * @param {Object} options - Opções de animação
 */
export const animateText = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    stagger: 0.02,
    ease: "power2.out",
    delay: 0
  };

  const config = { ...defaults, ...options };

  // Obtém o texto original e zera o conteúdo do elemento
  const text = element.textContent;
  element.innerHTML = '';

  // Quebra o texto em caracteres, encapsula cada um em uma <span> e adiciona ao DOM
  Array.from(text).forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // espaço inquebrável
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    element.appendChild(span);
  });

  // Anima todos os spans com efeito de entrada e atraso em cascata
  const chars = element.querySelectorAll('span');
  return gsap.to(chars, {
    opacity: 1,
    y: 0,
    stagger: config.stagger,
    duration: config.duration,
    ease: config.ease,
    delay: config.delay
  });
};

/**
 * Faz fade in com movimento para cima (ex: textos ou cards)
 * @param {HTMLElement|NodeList|string} element - Elemento(s) a animar
 * @param {Object} options - Opções de animação
 */
export const fadeInUp = (element, options = {}) => {
  const defaults = {
    y: 50,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    delay: 0,
    stagger: 0.1,
    scrollTrigger: false
  };

  const config = { ...defaults, ...options };

  // Com ScrollTrigger
  if (config.scrollTrigger) {
    return gsap.from(element, {
      ...config,
      scrollTrigger: {
        trigger: typeof config.scrollTrigger === 'boolean' ? element : config.scrollTrigger,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }

  // Sem ScrollTrigger
  return gsap.from(element, config);
};

/**
 * Animação de flutuação (ideal para elementos "espaciais", como foguetes)
 * @param {HTMLElement|NodeList|string} element - Elemento(s) a animar
 * @param {Object} options - Opções de animação
 */
export const floatingAnimation = (element, options = {}) => {
  const defaults = {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0,
  };

  const config = { ...defaults, ...options };

  return gsap.to(element, config);
};

/**
 * Animação contínua de rotação (ex: planetas ou ícones)
 * @param {HTMLElement|NodeList|string} element - Elemento(s) a animar
 * @param {Object} options - Opções de animação
 */
export const rotateAnimation = (element, options = {}) => {
  const defaults = {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center"
  };

  const config = { ...defaults, ...options };

  return gsap.to(element, config);
};

/**
 * Animação de revelação para elementos em uma timeline
 * @param {HTMLElement|NodeList|string} element - Elemento(s) a animar
 */
export const timelineReveal = (element) => {
  return gsap.from(element, {
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
};

/**
 * Animação de "piscar" para estrelas
 * @param {HTMLElement|NodeList|string} stars - Elementos estrela
 */
export const starsTwinkle = (stars) => {
  gsap.utils.toArray(stars).forEach((star, i) => {
    gsap.to(star, {
      opacity: gsap.utils.random(0.1, 1),
      duration: gsap.utils.random(1, 3),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.05
    });
  });
};

/**
 * Animação de estrela cadente
 * @param {HTMLElement|NodeList|string} element - Elemento(s) a animar
 */
export const shootingStar = (element) => {
  return gsap.to(element, {
    x: '120vw',
    y: '70vh',
    duration: 5,
    ease: "power1.in",
    repeat: -1,
    repeatDelay: gsap.utils.random(5, 15),
    onRepeat: () => {
      gsap.set(element, {
        x: '-10vw',
        y: '-10vh'
      });
    }
  });
};

/**
 * Efeito de parallax com rolagem
 * @param {HTMLElement|NodeList|string} elements - Elementos a aplicar parallax
 * @param {number[]} speeds - Velocidades relativas para cada elemento
 */
export const parallaxScroll = (elements, speeds) => {
  gsap.utils.toArray(elements).forEach((element, i) => {
    gsap.to(element, {
      y: () => speeds[i % speeds.length] * (ScrollTrigger.maxScroll(window) - ScrollTrigger.scrollTop()),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: true
      }
    });
  });
};
