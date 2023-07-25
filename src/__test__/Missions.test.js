import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import Missions from '../pages/Missions';
// Create a mock store using redux-mock-store
const mockStore = configureMockStore();
const store = mockStore({
  missions: {
    value: [
      {
        id: 1, mission: 'Mission 1', description: 'Mission 1 Description', status: 'Active',
      },
      {
        id: 2, mission: 'Mission 2', description: 'Mission 2 Description', status: 'Inactive',
      },
    ],
  },
});

describe('Missions', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
