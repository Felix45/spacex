import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { book } from '../redux/slices/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, rocket_name, description, flickr_images, booked,
  } = rocket;

  const handleBooking = () => dispatch(book({ id, booked: !booked }));

  return (
    <Row className="my-5">
      <Col md={6} lg={3}>
        <Card>
          <Card.Img variant="top" src={flickr_images[0]} alt={rocket_name} />
        </Card>
      </Col>
      <Col md={6} lg={9}>
        <Card>
          <Card.Body>
            <Card.Title>{rocket_name}</Card.Title>
            <Card.Text>
              {booked && <Badge className="me-2" bg="info">Reserved</Badge>}
              {description}
            </Card.Text>
            {
              booked
                ? <Button variant="outline-secondary" onClick={handleBooking}>Cancel Reservation</Button>
                : <Button variant="primary" onClick={handleBooking}>Reserve Rocket</Button>
            }
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
