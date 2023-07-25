import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../pages/MyProfile';

const mockStore = configureStore([]);

describe('MyProfile component', () => {
  test('renders correctly', () => {

    const initialState = {
      rockets: {
        value: [
          {
            id: 'rocket1',
            name: 'Rocket 1',
            reserved: true,
          },

        ],
      },
      missions: {
        value: [
          {
            id: 'mission1',
            name: 'Mission 1',
            description: 'This is the mission description',
            joined: true,
          },

        ],
      },
    };
    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
