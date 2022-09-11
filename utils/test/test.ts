import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@/store/reducers/auth';
import pageReducer from '@/store/reducers/page';
import toastReducer from '@/store/reducers/toast';

import { mockDispatchType } from './test.types';

export const configureTestStore = () => {
	const store = configureStore({
		reducer: {
			page: pageReducer,
			auth: authReducer,
			toast: toastReducer,
		},
	});

	const originDispatch = store.dispatch;
	store.dispatch = jest.fn(originDispatch) as mockDispatchType;

	return store;
};
