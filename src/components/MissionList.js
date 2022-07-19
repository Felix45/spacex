import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Mission from './Mission';

const MissionList = (props) => {
  const { missions } = props;

  return (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => (
            <Mission key={mission.id} mission={mission} />))
        }
      </tbody>
    </Table>
  );
};

MissionList.propTypes = {
  missions: PropTypes.instanceOf(Object).isRequired,
};

export default MissionList;
