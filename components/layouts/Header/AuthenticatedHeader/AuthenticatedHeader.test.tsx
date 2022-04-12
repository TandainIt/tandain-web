import { fireEvent, render, screen } from '@testing-library/react';

import { ReduxProvider } from '@/pages/_app';
import AuthenticatedHeader from './AuthenticatedHeader';

const renderAuthenticatedHeader = () =>
	render(
		<ReduxProvider>
			<AuthenticatedHeader />
		</ReduxProvider>
	);

describe('Header/<AuthenticatedHeader>', () => {
	it('should render without sidebar button in large screen', () => {
		renderAuthenticatedHeader();

		const authenticatedHeader = screen.getByTestId('authenticated-header');
		const sidebarToggleButton = screen.getByTestId('sidebar-toggle');
		const logo = screen.getByTestId('logo');
		const avatar = screen.getByTestId('avatar');

		expect(authenticatedHeader).toBeVisible();
		expect(sidebarToggleButton).toBeVisible();
		expect(logo).toBeVisible();
		expect(avatar).toBeVisible();
	});

	it('should fire sidebar toogle button click', () => {
		renderAuthenticatedHeader();
		const toggleSidebarSpy = jest.spyOn(
			require('../../../../store/actions/page'),
			'toggleExpandSidebar'
		);

		const sidebarToggleButton = screen.getByTestId('sidebar-toggle');

		fireEvent.click(sidebarToggleButton);
		expect(toggleSidebarSpy).toHaveBeenCalledTimes(1);
	});
});
