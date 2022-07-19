import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Rocket = (props) => {
  const { rocket } = props;
  const {
    id, rocket_name, description, flickr_images,
  } = rocket;

  return (
    <Row className="m-4 my-5">
      <Col md={6} lg={2}>
        <Card>
          <Card.Img variant="top" src={flickr_images} alt={rocket_name} />
        </Card>
      </Col>
      <Col md={6} lg={10}>
        <Card>
          <Card.Body>
            <Card.Title>{rocket_name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button id={id} variant="primary">Reserve Rocket</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default Rocket;
