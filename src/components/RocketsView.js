import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import RocketList from './RocketList';
import { fetchRocketsThunk } from '../redux/slices/rocketsSlice';

const RocketsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsThunk());
  }, []);

  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketsView;
