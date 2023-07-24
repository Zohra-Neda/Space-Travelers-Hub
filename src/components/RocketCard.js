import React from 'react';
import '../styles/RocketCard.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservedRocket, cancelReserve } from '../redux/rocketSlice';

function RocketCard({ rocket }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!rocket.reserved) {
      dispatch(reservedRocket(rocket.id));
    } else {
      dispatch(cancelReserve(rocket.id));
    }
  };
  return (
    <div className="rocket-card flex gap-10 my-7 w-[80%] mx-auto">
      <figure className="img-container">
        <img src={rocket.image} alt="rocket" className="rocket-image max-w-none" />
      </figure>
      <div className="rocket-data flex flex-col gap-3">
        <h2 className=" font-semibold text-2xl rocket-title">{rocket.name}</h2>
        <p className="rocket-description text-justify">
          {rocket.reserved ? <span className=" text-white bg-green-500 px-2 rounded-sm">Reserved</span> : rocket.description}
          {rocket.reserved && ` ${rocket.description}`}
          {' '}
          {/* Display description if reserved */}
        </p>
        <button
          type="button"
          onClick={handleClick}
          className={
            rocket.reserved
              ? ' border border-2 text-gray-500 rounded-sm reserve-btn px-2 py-2 w-[20%]'
              : 'reserve-btn px-4 py-2 w-[20%] text-white bg-blue-500 rounded-sm shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          }
        >
          {!rocket.reserved ? 'Reserved' : 'Cancel Reservation'}
        </button>

      </div>
    </div>
  );
}

RocketCard.propTypes = {
  rocket: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default RocketCard;