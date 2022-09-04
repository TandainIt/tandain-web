import { createAction } from '@reduxjs/toolkit';
import { Toast } from '@/components/ui/Toast/Toast.types';

export const setToast = createAction<Toast>('setToast');

export const hideToast = createAction('hideToast');

export const resetToast = createAction('resetToast');
