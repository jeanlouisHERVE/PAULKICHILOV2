import Footer from '../components/FooterContact';
import Icon from '../components/Icons';

export default function FooterContactContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Oeuvres</Footer.Title>
            <Footer.Link href="#">Gravures</Footer.Link>
            <Footer.Link href="#">Monotypes</Footer.Link>
            <Footer.Link href="#">Expositions</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Spectacles</Footer.Title>
            <Footer.Link href="#">Ombrelle Magique</Footer.Link>
            <Footer.Link href="#">Théâtre</Footer.Link>
            <Footer.Link href="#">Représentations</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Illustrations</Footer.Title>
            <Footer.Link href="#">Livres</Footer.Link>
            <Footer.Link href="#">Décors</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
            <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
            <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
            <Footer.Link href="#"><Icon className="fab fa-linkedin-in" />Linkedin</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
