import { render, screen } from '@testing-library/react';

import SignUp from '@/pages/signup';
import Login from '@/pages/login';
import { ReduxProvider } from '@/pages/_app';
import * as useAppSelector from '@/hooks/useAppSelector';
import { generateRandomString } from '@/utils/global';

const mockUseRouter = jest
	.spyOn(require('next/router'), 'useRouter')
	.mockImplementation(() => ({
		asPath: '/login',
		replace: jest.fn(),
	}));

const mockAppSelector = jest.spyOn(useAppSelector, 'useAppSelector');

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
		mockUseRouter.mockReturnValue({
			asPath: '/login',
			replace: jest.fn(),
		});

		it('should show login spinner', () => {
			mockAppSelector.mockReturnValue({
				credentials: {
					idToken: generateRandomString(),
				},
				isLoading: true,
			});

			render(
				<ReduxProvider>
					<Login />
				</ReduxProvider>
			);

			const unauthenticatedHeader = screen.getByTestId(
				'unauthenticated-header'
			);
			const spinner = screen.getByTestId('spinner');

			expect(unauthenticatedHeader).toBeVisible();
			expect(spinner).toBeVisible();
		});

		it('should show login form', () => {
			mockAppSelector.mockReturnValue({
				credentials: {
					idToken: undefined,
				},
				isLoading: false,
			});

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
