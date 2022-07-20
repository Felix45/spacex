import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { fetchRocketsThunk } from '../redux/slices/rocketsSlice';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsThunk());
  }, []);

  return (
    <main className="pt-5">
      <Header />
      <Container className="mt-5">
        <Outlet />
      </Container>
    </main>
  );
};

export default Layout;
