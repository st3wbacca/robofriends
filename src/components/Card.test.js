import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';
import '../setupTests';

it('expect to render Card component', () => {
	expect.assertions(2);
	expect(shallow(<Card />).length).toEqual(1);
	expect(shallow(<Card />)).toMatchSnapshot();
});