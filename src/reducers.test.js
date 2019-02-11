import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots reducer', () => {
	it('should return the initial state', () => {
		expect.assertions(3);
		const mockInitialStateSearch = {
			searchField: '',
		}

		expect(reducers.searchRobots(undefined, {})).toEqual(mockInitialStateSearch);
		expect(reducers.searchRobots(mockInitialStateSearch, undefined)).toEqual(mockInitialStateSearch);
		expect(reducers.searchRobots(undefined, undefined)).toEqual(mockInitialStateSearch);
	});

	it('should overwrite the existing state with payload', () => {
		expect.assertions(1);
		const mockInitialStateSearch = {
			searchField: 'a',
		}
		const mockAction = actions.setSearchField('ab');

		expect(reducers.searchRobots(mockInitialStateSearch, mockAction)).toEqual({ searchField: 'ab'});
	});
});

describe('requestRobots', () => {
	it('should return the initial state', () => {
		expect.assertions(3);
		const mockInitialStateRobots = {
			isPending: false,
			robots: [],
			error: '',
		}

		expect(reducers.requestRobots(undefined, {})).toEqual(mockInitialStateRobots);
		expect(reducers.requestRobots(mockInitialStateRobots, undefined)).toEqual(mockInitialStateRobots);
		expect(reducers.requestRobots(undefined, undefined)).toEqual(mockInitialStateRobots);
	});

	it('should handle REQUEST_ROBOTS_PENDING action', () => {
		expect.assertions(1);
		const mockInitialStateRobots = {
			isPending: false,
			robots: [],
			error: '',
		}

		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,
		})).toEqual({
			isPending: true,
			robots: [],
			error: '',
		});
	});

	it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect.assertions(1);
		const mockInitialStateRobots = {
			isPending: true,
			robots: [],
			error: '',
		}

		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: '123',
				name: 'test',
				email: 'test@gmail.com',
			}]
		})).toEqual({
			isPending: false,
			robots: [{
				id: '123',
				name: 'test',
				email: 'test@gmail.com',
			}],
			error: '',
		});
	});

	it('should handle REQUEST_ROBOTS_FAILED action', () => {
		expect.assertions(1);
		const mockInitialStateRobots = {
			isPending: true,
			robots: [],
			error: '',
		}

		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'error!',
		})).toEqual({
			isPending: false,
			robots: [],
			error: 'error!',
		});
	});
});