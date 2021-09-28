import './styles.scss';
import { TiSocialAtCircular, TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialInstagramCircular} from 'react-icons/ti';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';

const Contact = () => {
  const cssClass = 0;

  return (
    <main className="contact__container">
      <DivHiddenUnderNavbar />
      <div className="contact__picture--under--navbar"></div>
      <div className="contact__under--navbar">
        <div className="contact__left">
          <h1 className="posts-title">Contact</h1>
          <p><strong>Paul KICHILOV</strong></p>
          <p>Email : <a href="mailto:paul.kichilov@gmail.com?subject=Renseignements">paul.kichilov@gmail.com</a></p> 
          <p>Tél : <a href="tel:+330760457615">07.60.45.76.15</a></p>
          <div className="contact__icons">
            <a className="contact__social--icon" href="#"> <TiSocialInstagramCircular style={{ height: 50, width: 50 }} color="#000000" /></a>
            <a className="contact__social--icon" href="https://www.facebook.com/Paul.Kichilov.artiste/"> <TiSocialFacebookCircular style={{ height: 50, width: 50 }} color="#000000" /></a>
            <a className="contact__social--icon" href="#"> <TiSocialLinkedinCircular style={{ height: 50, width: 50 }} color="#000000" /></a>
            <a className="contact__social--icon" href="#"> <TiSocialAtCircular style={{ height: 50, width: 50 }} color="#000000" /></a>
          </div>
        </div>
        <div className="contact__right">
        </div>
      </div>   
    </main>
  );
};

export default Contact;
