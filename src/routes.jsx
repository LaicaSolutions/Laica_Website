import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PreRegisterSection from './sections/PreRegisterSection';
import HomeAtividades from './components/HomeAtividades';
import EventLandingPage from './components/EventLandingPage';
import ActivityDetail from './components/ActivityDetail';



const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pre-cadastro" element={<PreRegisterSection />} />
    <Route path="/atividades" element={<HomeAtividades />} />
    <Route path="/atividades/:activityId" element={<ActivityDetail />} />
    <Route path="/evento/:slug" element={<EventLandingPage />} />
   
            
  </Routes>
);

export default AppRoutes;
