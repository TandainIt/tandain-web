import { ReduxProvider } from '@/pages/_app';
import { renderHook } from '@testing-library/react';

import { useAuth } from './auth';
import { generateRandomString } from '@/utils/global';
import * as authActions from '@/store/actions/auth/auth';
import * as useAppSelector from '@/hooks/useAppSelector';

const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');
const mockAppSelector = jest.spyOn(useAppSelector, 'useAppSelector');
const mockRefreshGoogleToken = jest.spyOn(authActions, 'refreshGoogleToken');
const mockLocalStorage = jest.spyOn(Storage.prototype, 'getItem');

describe('auth/hooks', () => {
	describe('useAuth', () => {
		const mockIdToken = generateRandomString(64);

		it('should redirect to desired path if user is authenticated and desired path is exists', () => {
			const mockUseRouterValue = {
				asPath: '/login',
				replace: jest.fn(),
			};
			mockUseRouter.mockReturnValue(mockUseRouterValue);

			mockAppSelector.mockImplementation((cb: any) =>
				cb({
					auth: {
						credentials: {
							idToken: mockIdToken,
						},
						isLoading: false,
					},
				})
			);

			const { result } = renderHook(() => useAuth('/mylist'), {
				wrapper: ReduxProvider,
			});
			const { idToken, isLoading } = result.current;

			expect(mockUseRouterValue.replace).toHaveBeenCalledWith('/mylist');
			expect(isLoading).toEqual(true);
			expect(idToken).toEqual(mockIdToken);
		});

		it('should call refresh token action if user is not authenticated but the refresh token is exists', () => {
			const mockRefreshToken = generateRandomString(128);

			mockAppSelector.mockImplementation((cb: any) =>
				cb({
					auth: {
						credentials: {
							idToken: undefined,
						},
						isLoading: false,
					},
				})
			);

			mockLocalStorage.mockReturnValue(mockRefreshToken);

			const { result } = renderHook(() => useAuth('/mylist'), {
				wrapper: ReduxProvider,
			});
			const { isLoading } = result.current;

			expect(isLoading).toEqual(true);
			expect(mockRefreshGoogleToken).toHaveBeenCalledWith({
				refreshToken: mockRefreshToken,
			});

			mockLocalStorage.mockRestore();
		});

		it('should redirect to login page if user is not authenticated and user is not on login or sign up page', () => {
			const mockUseRouterValue = {
				asPath: '/mylist',
				replace: jest.fn(),
			};

			mockAppSelector.mockImplementation((cb: any) =>
				cb({
					auth: {
						credentials: {
							idToken: undefined,
						},
						isLoading: false,
					},
				})
			);

			mockUseRouter.mockReturnValue(mockUseRouterValue);

			const { result } = renderHook(() => useAuth(), {
				wrapper: ReduxProvider,
			});
			const { isLoading } = result.current;

			expect(mockUseRouterValue.replace).toHaveBeenCalledWith('/login');
			expect(isLoading).toEqual(true);
		});

		it('should set authLoading to false is fetching credentials is done and authLoading is still true', () => {
			const mockUseRouterValue = {
				asPath: '/login',
				replace: jest.fn(),
			};

			mockUseRouter.mockReturnValue(mockUseRouterValue);

			mockAppSelector.mockImplementation((cb: any) =>
				cb({
					auth: {
						credentials: {
							idToken: undefined,
						},
						isLoading: false,
					},
				})
			);

			const { result } = renderHook(() => useAuth('/mylist'), {
				wrapper: ReduxProvider,
			});
			const { isLoading } = result.current;

			expect(isLoading).toEqual(false);
		});
	});
});
