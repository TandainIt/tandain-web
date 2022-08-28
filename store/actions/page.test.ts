import { toggleExpandSidebar } from './page';
import { configureTestStore } from '@/utils/test';

describe('actions/page', () => {
	let store: ReturnType<typeof configureTestStore>;

	beforeEach(() => {
		store = configureTestStore();
	});

	it('it should toggle isSidebarExpanded value', () => {
		store.dispatch(toggleExpandSidebar());

		const state = store.getState();

		expect(state.page.isSidebarExpanded).toBe(true);
	});
});
