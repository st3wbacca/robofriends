import { shallow } from 'enzyme';
import '../setupTests';
import React from 'react';
import Scroll from './Scroll';

it('expect Scroll to match Snapshot', () => {
	expect.assertions(1);

	expect(shallow(<Scroll />)).toMatchSnapshot();
});