import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import RocketList from './RocketList';
import { ships } from '../data/mock';

const RocketsView = () => {
  const [rockets] = useState(ships);

  return (
    <Container fluid>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketsView;
