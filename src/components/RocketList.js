import React from 'react';
import { PropTypes } from 'prop-types';
import Rocket from './Rocket';

const RocketList = (props) => {
  const { rockets } = props;
  return (
    rockets.map((rocket) => (
      <Rocket key={rocket.id} rocket={rocket} />
    ))
  );
};

RocketList.propTypes = {
  rockets: PropTypes.instanceOf(Object).isRequired,
};

export default RocketList;
