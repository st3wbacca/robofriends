import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import SearchBox from './SearchBox';

it('expect SearchBox to match Snapshop', () => {
	expect.assertions(1);

	const wrapper = shallow(<SearchBox />);
	expect(wrapper).toMatchSnapshot();
});