import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => (
  <main className="pt-5">
    <Header />
    <Container className="mt-5">
      <Outlet />
    </Container>
  </main>
);

export default Layout;
