import { toggleExpandSidebar } from './page';
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
});
