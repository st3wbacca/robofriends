import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import '../setupTests';

it('expect ErrorBoundary to match Snapshot', () => {
	expect.assertions(2);

	const Placeholder = () => null;

	const wrapper = shallow(<ErrorBoundary><Placeholder /></ErrorBoundary>);
	const error = new Error('Error');

	expect(wrapper).toMatchSnapshot()

	wrapper.find(Placeholder).simulateError(error);

	expect(wrapper).toMatchSnapshot();
});