import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import MissionList from './MissionList';

const MissionsView = () => {
  const { items } = useSelector((state) => state.missions);

  return (
    <Row>
      <MissionList missions={items} />
    </Row>
  );
};

export default MissionsView;
