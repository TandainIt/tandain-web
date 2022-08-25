import { render, screen } from '@testing-library/react';

import MyListPage from '@/pages/mylist';
import { ReduxProvider } from '@/pages/_app';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const renderMyListPage = () =>
	render(
		<ReduxProvider>
			<MyListPage />
		</ReduxProvider>
	);

describe('pages/MyListPage', () => {
	beforeEach(() => {
		useRouter.mockImplementation(() => ({
			pathname: '/mylist',
		}));
	});

	it('should render correctly', () => {
		const { container } = renderMyListPage();

		const authenticatedHeader = screen.getByTestId('authenticated-header');
		const sidebar = screen.getByTestId('sidebar');
		const myListTitle = container.querySelector('h1');
		const myList = screen.getByRole('list');

		expect(authenticatedHeader).toBeVisible();
		expect(sidebar).toBeVisible();
		expect(myListTitle).toHaveTextContent(/my list/i);
		expect(myList).toBeVisible();
	});
});
