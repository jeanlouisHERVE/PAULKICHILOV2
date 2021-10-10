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
import FooterContactContainer from 'src/containers/FooterContact';

// data, styles et utilitaires
import './styles.scss';

// == Composant
const App = () => (

  <div className="App">
    <NavbarHeader2 />
    <Switch>
      <Route path="/" exact>
        <Home />
        <Footer />
      </Route>
      <Route path="/galerie/monotypes" exact>
        <Monotypes />
        <Footer />
      </Route>
      <Route path="/galerie/gravures">
        <Gravures />
        <Footer />
      </Route>
      <Route path="/galerie/illustrations">
        <Illustrations />
        <Footer />
      </Route>
      <Route path="/expositions">
        <Exhibitions />
        <Footer />
      </Route>
      <Route path="/spectacles">
        <Spectacles />
        <Footer />
      </Route>
      <Route path="/blog">
        <Blog />
        <Footer />
      </Route>
      <Route path="/boutique">
        <Shop />
        <Footer />
      </Route>
      <Route path="/contact">
        <Contact />
        <FooterContactContainer />
      </Route>
      <Route path="/legalMention">
        <LegalMention />
        <Footer />
      </Route>
      <Route path="/confidentialPolicy">
        <ConfidentialPolicy />
        <Footer />
      </Route>
      <Route>
        <NotFound />
        <Footer />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
