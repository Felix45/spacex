import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import RocketList from './RocketList';

const RocketsView = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <Container>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketsView;
