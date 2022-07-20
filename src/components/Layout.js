import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { fetchRocketsThunk } from '../redux/slices/rocketsSlice';
import { fetchMissionsThunk } from '../redux/slices/missionsSlice';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsThunk());
    dispatch(fetchMissionsThunk());
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
