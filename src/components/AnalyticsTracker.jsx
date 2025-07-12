import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logAnalyticsEvent } from '../services/analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Rastreia uma visualização de página toda vez que a rota muda
    logAnalyticsEvent('page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title, // Você pode tornar isso mais dinâmico se os títulos mudarem
    });
  }, [location]);

  return null; // Este componente não renderiza nada na tela
};

export default AnalyticsTracker;