import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission } from '../redux/slices/missionsSlice';

const Mission = (props) => {
  const dispatch = useDispatch();

  const { mission } = props;
  const {
    mission_id, mission_name, description, reserved,
  } = mission;

  const handleMission = () => dispatch(joinMission({ mission_id }));

  return (
    <tr>
      <td className="fw-bold">{ mission_name }</td>
      <td>{ description }</td>
      <td className="align-middle">
        { reserved && <Badge className="text-uppercase" bg="info"> Active Member </Badge>}
        { !reserved && <Badge className="text-uppercase" bg="secondary">Not a member</Badge> }
      </td>
      <td className="align-middle">
        {
          reserved
            ? <Button id={mission_id} className="w-100 text-uppercase" variant="outline-danger" onClick={handleMission}>Leave Mission</Button>
            : <Button id={mission_id} className="w-100 text-uppercase" variant="outline-dark" onClick={handleMission}>Join Mission</Button>
        }
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Mission;
