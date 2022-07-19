import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { missionData } from '../data/mock';
import MissionList from './MissionList';

const MissionsView = () => {
  const [missions] = useState(missionData);

  return (
    <Container fluid>
      <Row className="m-5">
        <MissionList missions={missions} />
      </Row>
    </Container>
  );
};

export default MissionsView;
