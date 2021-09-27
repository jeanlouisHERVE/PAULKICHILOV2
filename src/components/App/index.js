import { Route, Switch } from 'react-router-dom';

// Composants
import NavbarHeader from 'src/components/NavbarHeader';
import Home from 'src/components/Home';
// import Gravures from 'src/components/Gravures';
import Monotypes from 'src/components/Monotypes';
// import Illustrations from 'src/components/Illustrations';
// import Exhibitions from 'src/components/Exhibitions';
// import Spectacles from 'src/components/Spectacles';
// import Blog from 'src/components/Blog';
// import Shop from 'src/components/Shop';
// import ConfidentialPolicy from 'src/components/ConfidentialPolicy';
// import LegalMention from 'src/components/LegalMention';
// import Contact from 'src/components/Contact';
import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import './styles.scss';

// == Composant
const App = () => {
  const zero = 0;

  return (
    <div className="App">
      <NavbarHeader />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/galerie/monotypes">
          <Monotypes />
        </Route>
        {/* <Route path="/galerie/gravures">
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
        </Route> */}
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
