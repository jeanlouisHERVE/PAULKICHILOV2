// data, styles et utilitaires
import './styles.scss';
// react router dom
import { Route, Switch } from 'react-router-dom';
// Composants
// import NavbarHeader from 'src/components/NavbarHeader';
import Blog from 'src/Pages/Blog';
import ConfidentialPolicy from 'src/Pages/ConfidentialPolicy';
import Contact from 'src/Pages/Contact';
import Exhibitions from 'src/Pages/Exhibitions';
import Footer from 'src/components/Footer';
import FooterContactContainer from 'src/containers/FooterContact';
import Gravures from 'src/Pages/Gravures';
import Home from 'src/Pages/Home';
import Illustrations from 'src/Pages/Illustrations';
import LegalMention from 'src/Pages/LegalMention';
import Monotypes from 'src/Pages/Monotypes';
import NavbarHeader2 from 'src/components/NavbarHeader2';
import NotFound from 'src/Pages/NotFound';
import Shop from 'src/Pages/Shop';
import Spectacles from 'src/Pages/Spectacles';

// == Composant
const App = () => (

  <div className="App">
    <NavbarHeader2 />
    <Switch>
      <Route path="/" exact>
        <Home />
        <FooterContactContainer />
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
        <Footer />
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
