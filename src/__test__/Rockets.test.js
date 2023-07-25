import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../pages/Rockets';

describe('Rockets component', () => {
  const mockStore = configureStore([]);

  test('renders correctly', () => {
    const initialState = {
      rockets: {
        loading: false,
        value: [
          {
            id: 'rocket1',
            name: 'Rocket 1',
            description: 'This is rocket 1',
            image: 'https://example.com/rocket1.jpg',
            reserved: false,
          },
          {
            id: 'rocket2',
            name: 'Rocket 2',
            description: 'This is rocket 2',
            image: 'https://example.com/rocket2.jpg',
            reserved: true,
          },
        ],
        error: '',
      },
    };

    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
