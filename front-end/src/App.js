import { Switch, Route } from 'react-router-dom';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';
import MatilhaDaKombi from './pages/MatilhaDaKombi';
import GarouNordeste from './pages/GarouNordeste';
import Page from './pages/Page';
import Rituals from './pages/Rituals';
import Friends from './pages/Friends';
import AboutUs from './pages/AboutUs';
import Trybes from './pages/Trybes';
import Breeds from './pages/Breeds';
import Auspices from './pages/Auspices';
import Gifts from './pages/Gifts';
import Login from './pages/Login';
import Painel from './pages/admin/Painel';
import RegisterGift from './pages/admin/RegisterGift';
import Ficha from './components/Ficha/Ficha';


function App() {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path="/painel-admin" component={Painel} />
          <Route path="/painel-dons" component={RegisterGift} />
          <Route path="/ficha" component={Ficha} />
          <Route exact path="/guia-das-matilhas" component={Home} />
          <Route path="/trybes" component={Trybes} />
          <Route path="/breeds" component={Breeds} />
          <Route path="/auspices" component={Auspices} />
          <Route path="/about" component={AboutUs} />
          <Route path="/menu" component={Menu} />
          <Route path="/dons" component={Gifts} />
          <Route path="/matilha-da-kombi" component={MatilhaDaKombi} />
          <Route path="/garou-nordeste" component={GarouNordeste} />
          <Route path="/page" component={Page} />
          <Route path="/rituais" component={Rituals} />
          <Route path="/parceiros" component={Friends} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
