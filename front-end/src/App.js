import { Switch, Route } from 'react-router-dom';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home';
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
import Login from './pages/admin/Login';
import Painel from './pages/admin/Painel';
import RegisterGift from './pages/admin/RegisterGift';

function App() {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
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
          <Route path='/login' component={Login} />
          <Route path="/painel-admin" component={Painel} />
          <Route path="/painel-dons" component={RegisterGift} />
          <Route exact path="*" component={Home} />
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;