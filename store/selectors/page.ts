import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../';

const selectPage = (state: RootState) => state.page;

const pageSelector = createSelector(selectPage, (state) => state);

export default pageSelector;
