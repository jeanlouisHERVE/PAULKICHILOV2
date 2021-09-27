import './styles.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="footer__copyright">
      Paul Kichilov - {year} ©
    </footer>
  );
};

export default Footer;
