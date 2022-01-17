import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram} from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';
import { IconContext } from "react-icons";
import './styles.scss';
// import Icon from '../Icons';
import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  LinkSocial,
  Title,
} from './Styles/FooterElements';

export default function FooterContactContainer() {

  
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <Title>Oeuvres</Title>
            <a href="/galerie/gravures"><Link>Gravures</Link></a>
            <a href="/galerie/monotypes"><Link>Monotypes</Link></a>
            <a href="/galerie/expositions"><Link>Expositions</Link></a>
          </Column>
          <Column>
            <Title>Spectacles</Title>
            <a href="/spectacles"><Link>Ombrelle Magique</Link></a>
            <a href="/spectacles"><Link href="/spectacles">Théâtre</Link></a>
            <a href="/date"><Link>Représentations</Link></a>
          </Column>
          <Column>
            <Title>Illustrations</Title>
            <a href="/books"><Link>Livres</Link></a>
            <a href="/decors"><Link>Décors</Link></a>
          </Column>
          <Column>
            <Title>Social</Title>
            <a rel="noreferrer" target="_blank" href="https://fr-fr.facebook.com/Paul.Kichilov.artiste/"><LinkSocial><IconContext.Provider value={{size: '1em'}}><FaFacebookF /></IconContext.Provider>Facebook</LinkSocial></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/paul.kichilov.artiste/?hl=fr"><LinkSocial><IconContext.Provider value={{size: '1em'}}><FaInstagram /></IconContext.Provider>Instagram</LinkSocial></a>
            <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCT9LmTF-Wk9gI7X3RNExEmA"><LinkSocial><IconContext.Provider value={{size: '1em'}}><FaYoutube /></IconContext.Provider>Youtube</LinkSocial></a>
            <a rel="noreferrer" target="_blank" href="https://fr.linkedin.com/in/paul-kichilov-43b4a949"><LinkSocial><IconContext.Provider value={{size: '1em'}}><FaLinkedinIn /></IconContext.Provider>Linkedin</LinkSocial></a>
            <a href="/contact"><LinkSocial><IconContext.Provider value={{size: '1em'}}><FiMail /></IconContext.Provider>Contact</LinkSocial></a>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
}
