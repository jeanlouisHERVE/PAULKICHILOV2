import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonToggle,
} from 'reactstrap';

const NavbarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const NavbarBrand = styled.div`
  //   font-family: 'Roboto Condensed';
  //   width: 20%;
  //   display:flex;
  //   padding-left: 30px;
  //   font-weight: 600px;
  // `;

  // const Collapse = styled.div`
  //   font-family: 'Roboto Condensed';
  //   width: 80%;
  //   display:flex;
  //   justify-content: flex-end;
  //   padding-right: 30px;
  // `;

  return (
    <Navbar color="light" light expand="md" className="navBarHeader__container fixed-top d-flex justify-content-center">
      <NavbarBrand href="/" className="mr-auto">Paul KICHILOV </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Accueil</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Oeuvres
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/galerie/gravures">Gravures</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/galerie/monotypes">Monotypes</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/galerie/illustrations">Illustrations</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/expositions">Expositions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/spectacles">Spectacles</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/boutique">Boutique</NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Contact
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/contact">Contact</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/legalMention">Mentions légales</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/confidentialPolicy">Politique de confidentialité</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <ButtonToggle color="primary">Connexion</ButtonToggle>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavbarHeader.propTypes = {
};

export default NavbarHeader;
