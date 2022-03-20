import { render, screen } from '@testing-library/react';

import Login from './Login';

describe('Login/<Login>', () => {
	it('should render correctly', () => {
		render(<Login />);

		const login = screen.getByTestId('login-section');
		const title = screen.getByRole('heading', { name: 'Login' });
		const signupButton = screen.getByRole('link', { name: 'Sign up now' });
		const googleButton = screen.getByRole('button', {
			name: 'Login with Google',
		});

		expect(login).toBeVisible();
		expect(title).toBeVisible();
		expect(signupButton).toBeVisible();
		expect(googleButton).toBeVisible();
	});
});
