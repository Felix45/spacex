import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import LogoImage from '../assets/images/logo.png';

const navItems = [
  { to: '/', name: 'Rockets' },
  { to: '/missions', name: 'Missions' },
  'divider',
  { to: '/profile', name: 'Profile' },
];
const linkClassNames = ({ isActive }) => (isActive ? 'text-primary text-decoration-none' : 'text-secondary text-decoration-none');

const Header = () => (
  <header>
    <Navbar bg="light" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Image height="28px" src={LogoImage} alt="Logo" />
          <span className="ms-2">SpaceX</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navItems.map((navItem) => (
                navItem === 'divider'
                  ? <div key="divider" className="vr d-none d-md-block m-2" />
                  : (
                    <Nav.Link key={navItem.name} as="div">
                      <NavLink
                        className={linkClassNames}
                        to={navItem.to}
                      >
                        {navItem.name}
                      </NavLink>
                    </Nav.Link>
                  )
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
