import { shallow } from 'enzyme';
import '../setupTests';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
	expect.assertions(2);
	expect(shallow(<Card />).length).toEqual(1);
	expect(shallow(<Card />)).toMatchSnapshot();
});