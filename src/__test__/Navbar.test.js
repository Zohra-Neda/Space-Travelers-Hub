import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
// Use MemoryRouter to wrap the Navbar component to simulate routing behavior
const TestNavbar = () => (
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
);

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TestNavbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
