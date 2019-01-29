import { shallow } from 'enzyme';
import '../setupTests';
import React from 'react';
import CounterButton from './CounterButton';

it('expect CounterButton to match Snapshot', () => {
	expect.assertions(1);
	const mockColor = 'red';
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
	expect.assertions(5);
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 1 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3 });
	expect(wrapper.props().color).toEqual('red');
});