import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import store from '../store';

type mockDispatchType = ThunkDispatch<
	{ page: { isSidebarExpanded: boolean } },
	undefined,
	AnyAction
> &
	Dispatch<AnyAction>;

export const configureTestStore = () => {
	const originDispatch = store.dispatch;
	store.dispatch = jest.fn(originDispatch) as mockDispatchType;

	return store;
};
