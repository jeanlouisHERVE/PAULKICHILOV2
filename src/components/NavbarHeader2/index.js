import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from './LOGONAVBAR.png';
import Dropdown from '../Dropdown/Dropdown';
import { Button } from '../Button/Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1135) {
      setDropdown(false);
    }
    else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1135) {
      setDropdown(false);
    }
    else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="navbarImg" src={Logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Oeuvres <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/expositions"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Expositions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/spectacles"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Spectacles
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/galerie/illustrations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Illustrations
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
