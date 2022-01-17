// data, styles et utilitaires
import './styles.scss';
// react router dom
import { Route, Routes } from 'react-router-dom';
// Composants
// import NavbarHeader from 'src/components/NavbarHeader';
import Blog from '../../Pages/Blog';
import ConfidentialPolicy from '../../Pages/ConfidentialPolicy';
import Contact from '../../Pages/Contact';
import Exhibitions from '../../Pages/Exhibitions';
import Footer from '../../components/Footer';
import FooterContactContainer from '../../components/FooterContact';
import Gravures from '../../Pages/Gravures';
import Home from '../../Pages/Home';
import Illustrations from '../../Pages/Illustrations';
import LegalMention from '../../Pages/LegalMention';
import Monotypes from '../../Pages/Monotypes';
import NavbarHeader2 from '../../components/NavbarHeader2';
import NotFound from '../../Pages/NotFound';
import Shop from '../../Pages/Shop';
import Spectacles from '../../Pages/Spectacles';

// == Composant
const App = () => (

  <div className="App">
    <NavbarHeader2 />
    <Routes>
      <Route exact path="/" element={<><Home /><FooterContactContainer/></>} />
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
      <Route exact path="/contact" element={<><Contact /><Footer /></>} />
      <Route path="*" element={<><NotFound /><Footer /></>} />
    </Routes>
  </div>
);

// == Export
export default App;
