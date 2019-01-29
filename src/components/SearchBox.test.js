import { shallow } from 'enzyme';
import '../setupTests';
import React from 'react';
import SearchBox from './SearchBox';

it('expect SearchBox to match Snapshop', () => {
	expect.assertions(1);

	const wrapper = shallow(<SearchBox />);
	expect(wrapper).toMatchSnapshot();
});