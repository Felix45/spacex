import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { fetchMissionsThunk } from '../redux/slices/missionsSlice';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsThunk());
  }, [dispatch]);

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
