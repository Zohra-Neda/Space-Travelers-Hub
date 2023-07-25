import React from 'react';
import PropTypes from 'prop-types';

function MyRocketCard({ rocket }) {
  return (
    <div className="my-rocket-card border border-1 py-3 text-2xl ps-4 ">
      {rocket.name}
    </div>
  );
}

MyRocketCard.propTypes = {
  rocket: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MyRocketCard;
