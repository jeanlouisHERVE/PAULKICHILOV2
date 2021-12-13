// data, styles et utilitaires
import './styles.scss';
// react router dom
import { Route, Routes } from 'react-router-dom';
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
    <Routes>
      <Route exact path="/" element={<><Home /><FooterContactContainer /></>} />
      <Route exact path="/galerie/monotypes" element={<><Monotypes /><Footer /></>} />
      <Route exact path="/galerie/gravures" element={<><Gravures /><Footer /></>} />
      <Route exact path="/galerie/illustrations" element={<><Illustrations /><Footer /></>} />
      <Route exact path="/galerie/expositions" element={<><Exhibitions /><Footer /></>} />
      <Route exact path="/spectacles" element={<><Spectacles /><Footer /></>} />
      <Route exact path="/blog" element={<><Blog /><Footer /></>} />
      <Route exact path="/boutique" element={<><Shop /><Footer /></>} />
      <Route exact path="/contact" element={<><Contact /><Footer /></>} />
      <Route exact path="/legalMention" element={<><LegalMention /><Footer /></>} />
      <Route exact path="/confidentialPolicy" element={<><ConfidentialPolicy /><Footer /></>} />
      <Route exact path="contact" element={<><Contact /><Footer /></>} />
      <Route path="*" element={<><NotFound /><Footer /></>} />
    </Routes>
  </div>
);

// == Export
export default App;
