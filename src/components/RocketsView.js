import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RocketList from './RocketList';
import ships from '../data/data';

const RocketsView = () => {
  const [rockets] = useState(ships);

  return (
    <Container fluid>
      <RocketList rockets={rockets} />
    </Container>
  );
};

export default RocketsView;
