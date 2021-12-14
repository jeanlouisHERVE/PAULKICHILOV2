import './styles.scss';
import FooterForm from 'src/components/FooterForm';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer__container">
      <div className="footer__empty" />
      <div className="footer__copyright"><p>Paul Kichilov - {year} ©</p></div>
      <div className="footer__empty" />
    </footer>
  );
};

export default Footer;
