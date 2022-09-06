import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth';
import toastReducer from './reducers/toast';
import pageReducer from './reducers/page';

const store = configureStore({
	reducer: {
		page: pageReducer,
		auth: authReducer,
		toast: toastReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
