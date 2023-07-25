import React from 'react';
import PropTypes from 'prop-types';

function MyMissionCard({ mission }) {
  return (
    <div className="my-mission-card border border-1  text-2xl ps-4 py-3 ">
      {mission.name}
    </div>
  );
}

MyMissionCard.propTypes = {
  mission: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MyMissionCard;
