import React from 'react';
import { useSelector } from 'react-redux';
import MyMissionCard from '../components/MyMissionCard';
import MyRocketCard from '../components/MyRocketCard';

function MyProfile() {
  const originalRockets = useSelector((state) => state.rockets.value);
  const originalMissions = useSelector((state) => state.missions.value);

  const rockets = originalRockets.filter((rocket) => rocket.reserved !== false);
  const missions = originalMissions.filter((mission) => mission.joined !== false);

  return (
    <div className="flex justify-center my-10">
      <div className="profile-container flex gap-5 w-[80%]">
        <div className="w-[50%]">
          <h2 className="text-4xl font-semibold">My Missions</h2>
          <div className="my-mission-container my-5">
            {missions.map((mission) => <MyMissionCard key={mission.id} mission={mission} />)}
          </div>
        </div>
        <div className="w-[50%]">
          <h2 className="text-4xl font-semibold">My Rockets</h2>
          <div className="my-rockets-container my-5">
            {rockets.map((rocket) => <MyRocketCard key={rocket.id} rocket={rocket} />)}
          </div>
        </div>
      </div>
    </div>

  );
}

export default MyProfile;
