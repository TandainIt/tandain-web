import { configureTestStore } from '@/utils/test';

import { hideToast, resetToast, setToast } from './toast';

import { Toast } from '@/components/ui/Toast/Toast.types';

describe('actions/page', () => {
	let store: ReturnType<typeof configureTestStore>;

	beforeEach(() => {
		store = configureTestStore();
	});

	describe('setToast', () => {
		it('it should set toast store', () => {
			const error: Toast = {
				title: 'Network Error',
				message: 'Check your internet connection and try again',
				variant: 'danger',
				isShow: true,
			};

			store.dispatch(setToast(error));

			const state = store.getState();

			expect(state.toast).toEqual(error);
		});
	});

	describe('hideToast', () => {
		it('it should set isShow toast to false', () => {
			store.dispatch(hideToast());

			const state = store.getState();

			expect(state.toast).toMatchObject({
				isShow: false,
			});
		});
	});

	describe('resetToast', () => {
		it('it should set toast to initial state', () => {
			store.dispatch(resetToast());

			const state = store.getState();

			expect(state.toast).toMatchObject({
				title: null,
				message: null,
			});
		});
	});
});
