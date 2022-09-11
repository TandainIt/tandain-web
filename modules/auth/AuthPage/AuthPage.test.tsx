import { render, screen } from '@testing-library/react';

import SignUpPage from '@/pages/signup';
import Login from '@/pages/login';
import { AppProvider } from '@/pages/_app';
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
		mockUseRouter.mockReturnValue({
			asPath: '/signup',
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
				<AppProvider>
					<SignUpPage />
				</AppProvider>
			);

			const unauthenticatedHeader = screen.getByTestId(
				'unauthenticated-header'
			);
			const spinner = screen.getByTestId('spinner');

			expect(unauthenticatedHeader).toBeVisible();
			expect(spinner).toBeVisible();
		});

		it('should show sign up form', () => {
			mockAppSelector.mockReturnValue({
				credentials: {
					idToken: undefined,
				},
				isLoading: false,
			});

			render(
				<AppProvider>
					<SignUpPage />
				</AppProvider>
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
				<AppProvider>
					<Login />
				</AppProvider>
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
				<AppProvider>
					<Login />
				</AppProvider>
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
