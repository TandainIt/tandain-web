import { render, screen } from '@testing-library/react';
import AuthenticatedHeader from './AuthenticatedHeader';

describe('Header/<AuthenticatedHeader>', () => {
	it('should render without sidebar button in large screen', () => {
		render(<AuthenticatedHeader />);

		const authenticatedHeader = screen.getByTestId('authenticated-header');
		const sidebarToggleButton = screen.getByTestId('sidebar-toggle');
		const logo = screen.getByTestId('logo');
		const avatar = screen.getByTestId('avatar');

		expect(authenticatedHeader).toBeVisible();
		expect(sidebarToggleButton).toBeVisible();
		expect(logo).toBeVisible();
		expect(avatar).toBeVisible();
	});
});
