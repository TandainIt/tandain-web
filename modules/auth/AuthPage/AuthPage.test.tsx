import { render, screen } from '@testing-library/react';

import SignUp from '@/pages/signup';
import Login from '@/pages/login';
import { ReduxProvider } from '@/pages/_app';

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
	asPath: '/mylist',
}));

describe('modules/auth', () => {
	describe('SignUpPage', () => {
		it('should render correctly', () => {
			render(
				<ReduxProvider>
					<SignUp />
				</ReduxProvider>
			);

			const unauthenticatedHeader = screen.getByTestId(
				'unauthenticated-header'
			);

			const title = screen.getByRole('heading', { name: 'Sign Up' });
			const loginButton = screen.getByRole('link', { name: 'Login now' });
			const googleButton = screen.getByRole('button', {
				name: 'Sign up with Google',
			});

			expect(unauthenticatedHeader).toBeVisible();
			expect(title).toBeVisible();
			expect(loginButton).toBeVisible();
			expect(googleButton).toBeVisible();
		});
	});

	describe('LoginPage', () => {
		it('should render correctly', () => {
			render(
				<ReduxProvider>
					<Login />
				</ReduxProvider>
			);

			const unauthenticatedHeader = screen.getByTestId(
				'unauthenticated-header'
			);
			const title = screen.getByRole('heading', { name: 'Login' });
			const signupButton = screen.getByRole('link', { name: 'Sign up now' });
			const googleButton = screen.getByRole('button', {
				name: 'Login with Google',
			});

			expect(unauthenticatedHeader).toBeVisible();
			expect(title).toBeVisible();
			expect(signupButton).toBeVisible();
			expect(googleButton).toBeVisible();
		});
	});
});
