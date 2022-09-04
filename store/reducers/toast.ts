import { createReducer } from '@reduxjs/toolkit';

import { hideToast, resetToast, setToast } from '../actions/toast';

const initialState = {
	title: null,
	message: null,
	variant: 'success',
	isShow: false,
};

const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setToast, (state, { payload }) => {
			const { title, message, variant, isShow } = payload;

			state.title = title;
			state.message = message;
			state.variant = variant;
			state.isShow = isShow;
		})
		.addCase(hideToast, (state) => {
			state.isShow = false;
		})
		.addCase(resetToast, (state) => {
			const { title, message, isShow } = initialState;

			state.title = title;
			state.message = message;
			state.isShow = isShow;
		});
});

export default reducer;
