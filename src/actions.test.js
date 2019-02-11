import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares);

it('should create an action to search robots', () => {
	expect.assertions(1);
	const mockText = 'payload';
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: mockText,
	}

	expect(actions.setSearchField(mockText)).toEqual(expectedAction);
});

it('handles requesting robots API', () => {
	expect.assertions(1);
	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING,
	}

	const store = mockStore();
	store.dispatch(actions.requestRobots())
	const storeActions = store.getActions();
	expect(storeActions[0]).toEqual(expectedAction);
});

describe('async actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('creates REQUEST_ROBOTS_SUCCESS when fetching robots has been done', () => {
		expect.assertions(1);
		fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
			body: [
				{
					'id': 1,
					'name': 'Leanne Graham',
					'email': 'Sincere@april.biz',
				},
			],
			headers: { 'content-type': 'application/json' },
		});

		const expectedActions = [
			{ type: REQUEST_ROBOTS_PENDING },
			{ type: REQUEST_ROBOTS_SUCCESS,
				payload: [
					{
						'id': 1,
						'name': 'Leanne Graham',
						'email': 'Sincere@april.biz',
					},
				],
			},
		]

		const store = mockStore();
		return store.dispatch(actions.requestRobots()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('creates REQUEST_ROBOTS_FAILED when fetching robots has failed', () => {
		fetchMock.mock('https://jsonplaceholder.typicode.com/users', 404);

		const expectedActions = [
			{ type: REQUEST_ROBOTS_PENDING },
			{ type: REQUEST_ROBOTS_FAILED,
				payload: Error('404 Not Found'),
			},
		]

		const store = mockStore();
		return store.dispatch(actions.requestRobots()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});