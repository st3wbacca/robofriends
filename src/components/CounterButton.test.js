import { shallow } from 'enzyme';
import sinon from 'sinon';
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

it('only updates if the count state changes, not color prop', () => {
	expect.assertions(9);
	const mockColor = 'red';
	const spy = sinon.spy(CounterButton.prototype, 'shouldComponentUpdate');
	const wrapper = shallow(<CounterButton color={mockColor} />);
	
	expect(wrapper.state()).toEqual({ count: 0 });
	expect(spy.callCount).toEqual(0);
	expect(spy.notCalled).toBeTruthy();
	
	wrapper.find('[id="counter"]').simulate('click');
	expect(spy.callCount).toEqual(1);
	expect(spy.returnValues[0]).toBeTruthy();
	// or
	expect(spy.getCall(0).returned(true)).toBeTruthy();

	wrapper.setProps({ color: 'blue'});
	expect(spy.callCount).toEqual(2);
	expect(spy.returnValues[1]).toBeFalsy();
	// or
	expect(spy.getCall(1).returned(false)).toBeTruthy();
});