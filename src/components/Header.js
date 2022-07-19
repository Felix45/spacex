import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import LogoImage from '../assets/images/logo.png';

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
          <Nav className="ms-auto" activeKey="/">
            <Nav.Link href="/">Rockets</Nav.Link>
            <Nav.Link href="/missions">Missions</Nav.Link>
            <div className="vr d-none d-md-block m-2" />
            <Nav.Link href="/profile">My Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
