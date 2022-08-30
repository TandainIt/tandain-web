import authReducer from '@/store/reducers/auth';
import pageReducer from '@/store/reducers/page';
import { configureStore } from '@reduxjs/toolkit';

import { mockDispatchType } from './test.types';

export const configureTestStore = () => {
	const store = configureStore({
		reducer: {
			page: pageReducer,
			auth: authReducer,
		},
	});

	const originDispatch = store.dispatch;
	store.dispatch = jest.fn(originDispatch) as mockDispatchType;

	return store;
};

export const generateRandomString = (): string => {
	return Math.random().toString(36).replace('0.', '');
};
