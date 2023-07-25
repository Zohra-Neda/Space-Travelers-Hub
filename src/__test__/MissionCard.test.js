import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MissionCard from '../components/MissionCard';

describe('MissionCard component', () => {
  const mockMission = {
    id: 'mission1',
    name: 'Mission1',
    description: 'This is description',
    joined: false,
  };
  test('renders correctly with props', () => {
    const component = render.create(<MissionCard mission={mockMission} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapShot();
  });
});
