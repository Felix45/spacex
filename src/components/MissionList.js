import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Mission from './Mission';

const MissionList = (props) => {
  const { missions } = props;

  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th width="100">Mission</th>
          <th>Description</th>
          <th width="100">Status</th>
          <th width="150"> </th>
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
