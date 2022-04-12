import { render, screen } from '@testing-library/react';

import AvatarMenu from './AvatarMenu';

describe('AvatarMenu/<AvatarMenu />', () => {
	it('should render correctly', () => {
		render(<AvatarMenu />);

		const name = screen.getByTestId('name');
		const email = screen.getByTestId('email');
		const aboutButton = screen.getByText(/about/i);
		const logoutButton = screen.getByText(/logout/i);

		expect(name).toBeVisible();
		expect(email).toBeVisible();
		expect(aboutButton).toHaveAttribute('href', '/about');
		expect(logoutButton).toBeVisible();
	});
});
