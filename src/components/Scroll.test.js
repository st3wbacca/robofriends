import { shallow } from 'enzyme';
import React from 'react';
import '../setupTests';
import Scroll from './Scroll';

it('expect Scroll to match Snapshot', () => {
	expect.assertions(1);

	expect(shallow(<Scroll />)).toMatchSnapshot();
});