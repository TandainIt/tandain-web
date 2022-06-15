import { createReducer } from '@reduxjs/toolkit';

import { setToastError, toggleExpandSidebar } from '../actions/page';

const initialState = {
	isSidebarExpanded: false,
	error: undefined,
};

const pageReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(toggleExpandSidebar, (state) => {
			state.isSidebarExpanded = !state.isSidebarExpanded;
		})
		.addCase(setToastError, (state, { payload }) => {
			state.error = payload;
		});
});

export default pageReducer;
