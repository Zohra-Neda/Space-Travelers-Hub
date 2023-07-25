import React from 'react';
import renderer from 'react-test-renderer';
import MyMissionCard from '../components/MyMissionCard';

describe('MyMissionCard component', () => {
  test('renders correctly', () => {
    const mockMission = {
      id: 'mission1',
      name: 'Mission 1',
      description: 'This is the mission description',
      joined: true,
    };

    const component = renderer.create(<MyMissionCard mission={mockMission} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
