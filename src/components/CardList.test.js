import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import '../setupTests';

it('expect CardList to match Snapshot', () => {
	expect.assertions(1);
	const mockRobots = [
		{
			id: '1',
			name: 'John Snow',
			email: 'john@gmail.com',
		}
	]
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});