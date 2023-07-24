import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionCard.css';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missionSlice';

function MissionCard({ mission }) {
  const dispatch = useDispatch();
  const isJoined = mission.joined;

  const handleClick = () => {
    if (!isJoined) {
      dispatch(joinMission(mission.id));
    } else {
      dispatch(leaveMission(mission.id));
    }
  };
  return (
    <tr>
      <th className=" w-[10%]">{mission.name}</th>
      <th className="description-row">{mission.description}</th>
      <th className=" w-[17%]"><span className={!isJoined ? ' bg-gray-400 rounded-md px-2 py-1' : 'bg-green-500 text-white rounded-md px-1'}>{isJoined ? 'Active Member' : 'Not a Member'}</span></th>
      <th className=" w-[15%]">
        <button
          type="button"
          className={isJoined ? 'border px-2 py-1 rounded-md border-red-500 text-red-500' : ' px-1 py-1 border border-slate-700 rounded-md text-gray-500'}
          onClick={handleClick}
          aria-label={mission.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        >
          {isJoined ? 'Leave Meeting ' : 'Join Meeting'}
        </button>
      </th>
    </tr>
  );
}

MissionCard.propTypes = {
  mission: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MissionCard;
