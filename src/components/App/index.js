import { Route, Switch } from 'react-router-dom';

// Composants
// import NavbarHeader from 'src/components/NavbarHeader';
import NavbarHeader2 from 'src/components/NavbarHeader2';
import Home from 'src/Pages/Home';
import Gravures from 'src/Pages/Gravures';
import Monotypes from 'src/Pages/Monotypes';
import Illustrations from 'src/Pages/Illustrations';
import Exhibitions from 'src/Pages/Exhibitions';
import Spectacles from 'src/Pages/Spectacles';
import Blog from 'src/Pages/Blog';
import Shop from 'src/Pages/Shop';
import ConfidentialPolicy from 'src/Pages/ConfidentialPolicy';
import LegalMention from 'src/Pages/LegalMention';
import Contact from 'src/Pages/Contact';
import NotFound from 'src/Pages/NotFound';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import './styles.scss';

// == Composant
const App = () => {
  const zero = 0;

  return (
    <div className="App">
      <NavbarHeader2 />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/galerie/monotypes" exact>
          <Monotypes />
        </Route>
        <Route path="/galerie/gravures">
          <Gravures />
        </Route>
        <Route path="/galerie/illustrations">
          <Illustrations />
        </Route>
        <Route path="/expositions">
          <Exhibitions />
        </Route>
        <Route path="/spectacles">
          <Spectacles />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/boutique">
          <Shop />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/legalMention">
          <LegalMention />
        </Route>
        <Route path="/confidentialPolicy">
          <ConfidentialPolicy />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
