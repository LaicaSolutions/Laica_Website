import { getAnalytics, logEvent } from '@firebase/analytics';
import { app } from '../../firebase'; 

const analytics = getAnalytics(app);

/**
 * Envia um evento customizado para o Google Analytics.
 * Isso ajuda a centralizar a lógica de analytics e facilita a depuração.
 * @param {string} eventName - O nome do evento (ex: 'select_content', 'login').
 * @param {object} [eventParams] - Parâmetros adicionais para o evento.
 */
export const logAnalyticsEvent = (eventName, eventParams = {}) => {
  // Log no console para facilitar a depuração durante o desenvolvimento
  //console.log(`[Analytics Event]: ${eventName}`, eventParams);

  try {
    logEvent(analytics, eventName, eventParams);
  } catch (error) {
    console.error('[Analytics Error]', error);
  }
};