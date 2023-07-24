import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rocketSlice';
import RocketCard from '../components/RocketCard';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <div className="rocket-container">
      {rockets.map((rocket) => <RocketCard key={rocket.id} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;