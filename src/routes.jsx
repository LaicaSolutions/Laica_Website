import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PreRegisterSection from './sections/PreRegisterSection';

import EventLandingPage from './components/EventLandingPage';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pre-cadastro" element={<PreRegisterSection />} />
   
    <Route path="/evento/:slug" element={<EventLandingPage />} />
   
            
  </Routes>
);

export default AppRoutes;
