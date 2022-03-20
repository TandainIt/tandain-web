import { render, screen } from '@testing-library/react';

import Signup from './Signup';

describe('Signup/<Signup>', () => {
	it('should render correctly', () => {
		render(<Signup />);

		const signup = screen.getByTestId('signup-section');
		const title = screen.getByRole('heading', { name: 'Sign Up' });
		const loginButton = screen.getByRole('link', { name: 'Login now' });
		const googleButton = screen.getByRole('button', {
			name: 'Sign up with Google',
		});

		expect(signup).toBeVisible();
		expect(title).toBeVisible();
		expect(loginButton).toBeVisible();
		expect(googleButton).toBeVisible();
	});
});
