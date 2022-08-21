import { createAction } from '@reduxjs/toolkit';

export const toggleExpandSidebar = createAction('toggleExpandSidebar');

export const setToastError = createAction<any>('setToastError');