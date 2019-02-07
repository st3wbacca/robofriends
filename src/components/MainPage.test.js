import { shallow } from 'enzyme';
import '../setupTests';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

// done before every test, but we only use in Snapshot. just to show concept
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	}
	wrapper = shallow(<MainPage { ...mockProps } />);
});

it('expect MainPage to match Snapshots', () => {
	expect.assertions(2);
	expect(wrapper).toMatchSnapshot();

	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true,
	}

	wrapper = shallow(<MainPage { ...mockProps} />);
	expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly, initial empty and then just john', () => {
	expect.assertions(2);
	expect(wrapper.instance().filterRobots()).toEqual([]);
	
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com',
			},
			{
				id: 4,
				name: 'Jane',
				email: 'jane@gmail.com',
			},
		],
		searchField: 'john',
		isPending: false,
	}

	const filteredRobots = [
		{
			id: 3,
			name: 'John',
			email: 'john@gmail.com',
		},
	];

	wrapper = shallow(<MainPage { ...mockProps} />);
	expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});

it('filters robots correctly, robot not found', () => {
	expect.assertions(1);

	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com',
			},
			{
				id: 4,
				name: 'Jane',
				email: 'jane@gmail.com',
			},
		],
		searchField: 'bob',
		isPending: false,
	}

	const filteredRobots = [];

	wrapper = shallow(<MainPage { ...mockProps} />);
	expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});

it('filters robots correctly, both robots found', () => {
	expect.assertions(1);

	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com',
			},
			{
				id: 4,
				name: 'Jane',
				email: 'jane@gmail.com',
			},
		],
		searchField: 'j',
		isPending: false,
	}

	const filteredRobots = [
		{
			id: 3,
			name: 'John',
			email: 'john@gmail.com',
		},
		{
			id: 4,
			name: 'Jane',
			email: 'jane@gmail.com',
		},
	];

	wrapper = shallow(<MainPage { ...mockProps} />);
	expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});