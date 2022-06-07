import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Trybes from './pages/Trybes';
import Breeds from './pages/Breeds';
import Auspices from './pages/Auspices';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/trybes" component={Trybes} />
      <Route path="/breeds" component={Breeds} />
      <Route path="/auspices" component={Auspices} />
      <Route path="/about" component={AboutUs} />
      "/matilha-da-kombi
      /garou-nordeste
      /page
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
