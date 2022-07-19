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
      <td className="mx-1">
        <Badge bg="secondary">Not a member</Badge>
      </td>
      <td className="p-2">
        <Button id={mission_id} variant="outline-dark" className="p-0" size="sm">Join Mission</Button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
