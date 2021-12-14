import './styles.scss';
import picture from './rescousse.jpg';
import ContactForm from '../../components/ContactForm';

const Contact = () => (
  <main className="contact__container">
    <div className="contact__under--navbar">
      <div className="contact__right" style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="contact__left--container">
        <div className="contact__left--form">
          <ContactForm />
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
