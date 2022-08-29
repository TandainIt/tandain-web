import { setToastError, toggleExpandSidebar } from './page';
import { configureTestStore } from '@/utils/test';

describe('actions/page', () => {
	let store: ReturnType<typeof configureTestStore>;

	beforeEach(() => {
		store = configureTestStore();
	});

	describe('toggleExpandSidebar', () => {
		it('it should toggle isSidebarExpanded value', () => {
			store.dispatch(toggleExpandSidebar());

			const state = store.getState();

			expect(state.page.isSidebarExpanded).toBe(true);
		});
	});

  describe('setToastError', () => {
    it('it should set error value which will be used by Toast', () => {
      const mockError = {
        title: 'Network Error',
        message: 'Check your internet connection and try again',
      };

			store.dispatch(setToastError(mockError));

			const state = store.getState();

			expect(state.page.error).toEqual(mockError);
		});
  })
});
