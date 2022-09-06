import { createReducer } from '@reduxjs/toolkit';

import { toggleExpandSidebar } from '../actions/page';

const initialState = {
	isSidebarExpanded: false,
};

const pageReducer = createReducer(initialState, (builder) => {
	builder.addCase(toggleExpandSidebar, (state) => {
		state.isSidebarExpanded = !state.isSidebarExpanded;
	});
});

export default pageReducer;
