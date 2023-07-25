import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../pages/Missions';

// Create a mock store
const mockStore = configureStore([]);

describe('Missions component', () => {
  test('renders correctly', () => {
    // Create a mock missions array to be used in the store
    const mockMissions = [
      {
        id: 'mission1',
        name: 'Mission 1',
        description: 'This is mission 1 description',
        joined: false,
      },
      {
        id: 'mission2',
        name: 'Mission 2',
        description: 'This is mission 2 description',
        joined: true,
      },
    ];

    // Create a mock store with the initial state
    const store = mockStore({
      missions: {
        value: mockMissions,
        loading: false,
        error: '',
      },
    });

    // Render the component within the Provider with the mock store
    const component = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    // Create a snapshot of the rendered component
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
