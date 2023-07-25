import React from "react";
import renderer from 'react-test-renderer'
import MyRocketCard from "../components/MyRocketCard";

describe('MyRocketCard component', () => {
    test('renders correctly', () => {
        const mockRocket = {
            id: 'rocket1',
            name: 'Rocket1',
            description: 'This is the rocket description',
            joined: true,
        };

        const component = renderer.create(<MyRocketCard rocket={mockRocket} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapShot();
    });

})