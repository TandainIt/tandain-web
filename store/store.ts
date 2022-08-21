import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth';
import pageReducer from './reducers/page';

const store = configureStore({
	reducer: {
		page: pageReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
