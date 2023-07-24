import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missionSlice';
import MissionCard from '../components/MissionCard';

function Missions() {
  const missions = useSelector((state) => state.missions.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <table className="mission-container border border-1 w-[80%] mx-auto my-10">
      <tr className="header-table">
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>Join/Leave</th>
      </tr>
      {missions.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
    </table>
  );
}

export default Missions;
