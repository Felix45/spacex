import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const ProfileView = () => {

  const { rockets } = useSelector((state) => state.rockets);
  const { items } = useSelector((state) => state.missions);

  const filteredRockets = rockets.filter((rocket) => !!rocket.booked);
  const missions = items.filter((mission) => mission.reserved === true);

  return (
    <Row>
      <Col md={6}>
        <h2>My Missions</h2>
        <ListGroup>
          {
            missions.map((mission) => (
              <ListGroupItem key={mission.mission_id}>{mission.mission_name}</ListGroupItem>
            ))
          }
        </ListGroup>
      </Col>

      <Col md={6}>
        <h2>My Rockets</h2>
        <ListGroup>
          {
            filteredRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>{ rocket.rocket_name }</ListGroup.Item>
            ))
          }
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProfileView;
