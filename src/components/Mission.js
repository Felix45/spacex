import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Mission = (props) => {
  const { mission } = props;
  const { mission_id, mission_name, description } = mission;

  return (
    <tr>
      <td className="fw-bold">{ mission_name }</td>
      <td>{ description }</td>
      <td className="align-middle">
        <Badge className="text-uppercase" bg="secondary">Not a member</Badge>
      </td>
      <td className="align-middle">
        <Button id={mission_id} className="w-100 text-uppercase" variant="outline-dark">Join Mission</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
