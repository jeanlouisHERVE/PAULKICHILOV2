import './styles.scss';
import Footer from '../components/FooterContact';
import Icon from '../components/Icons';

export default function FooterContactContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Oeuvres</Footer.Title>
            <a href="/galerie/gravures"><Footer.Link>Gravures</Footer.Link></a>
            <a href="/galerie/monotypes"><Footer.Link>Monotypes</Footer.Link></a>
            <a href="/galerie/expositions"><Footer.Link>Expositions</Footer.Link></a>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Spectacles</Footer.Title>
            <a href="/spectacles"><Footer.Link>Ombrelle Magique</Footer.Link></a>
            <a href="/spectacles"><Footer.Link href="/spectacles">Théâtre</Footer.Link></a>
            <a href="#"><Footer.Link>Représentations</Footer.Link></a>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Illustrations</Footer.Title>
            <a href="#"><Footer.Link>Livres</Footer.Link></a>
            <a href="#"><Footer.Link>Décors</Footer.Link></a>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <a rel="noreferrer" target="_blank" href="https://fr-fr.facebook.com/Paul.Kichilov.artiste/"><Footer.Link><Icon className="fab fa-facebook-f" />Facebook</Footer.Link></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/paul.kichilov.artiste/?hl=fr"><Footer.Link><Icon className="fab fa-instagram" />Instagram</Footer.Link></a>
            <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCT9LmTF-Wk9gI7X3RNExEmA"><Footer.Link><Icon className="fab fa-youtube" />Youtube</Footer.Link></a>
            <a rel="noreferrer" target="_blank" href="https://fr.linkedin.com/in/paul-kichilov-43b4a949"><Footer.Link><a><Icon className="fab fa-linkedin-in" />Linkedin</a></Footer.Link></a>
            <a href="/contact"><Footer.Link><Icon className="far fa-paper-plane" />Contact</Footer.Link></a>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
