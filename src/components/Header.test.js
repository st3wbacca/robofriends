import { shallow } from 'enzyme';
import '../setupTests';
import React from 'react';
import Header from './Header';

it('expect Header to match Snapshot', () => {
	expect.assertions(1);
	const wrapper = shallow(<Header />);

	expect(wrapper).toMatchSnapshot();
});