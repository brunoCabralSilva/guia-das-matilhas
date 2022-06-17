import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import MatilhaDaKombi from './pages/MatilhaDaKombi';
import GarouNordeste from './pages/GarouNordeste';
import Page from './pages/Page';
import Rituals from './pages/Rituals';
import Friends from './pages/Friends';
import Gifts from './pages/Gifts';
import Trybes from './pages/Trybes';
import Breeds from './pages/Breeds';
import Auspices from './pages/Auspices';


function App() {
  const location = useLocation();
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/guia-das-matilhas" component={Home} />
          <Route path="/trybes" component={Trybes} />
          <Route path="/breeds" component={Breeds} />
          <Route path="/auspices" component={Auspices} />
          <Route path="/about" component={AboutUs} />
          <Route path="/menu" component={Menu} />
          <Route path="/matilha-da-kombi" component={MatilhaDaKombi} />
          <Route path="/garou-nordeste" component={GarouNordeste} />
          <Route path="/page" component={Page} />
          <Route path="/rituais" component={Rituals} />
          <Route path="/parceiros" component={Friends} />
          <Route path="/dons" component={Gifts} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
