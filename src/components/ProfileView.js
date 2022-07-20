import React from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProfileView = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const filteredRockets = rockets.filter((rocket) => !!rocket.booked);

  return (
    <Row>
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
