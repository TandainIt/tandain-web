import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { ReduxProvider } from '@/pages/_app';
import {
	AuthenticatedHeader,
	UnauthenticatedHeader,
	useAuthenticatedHeader,
} from './Header';

const ReduxWrapper = ({ children }) => (
	<ReduxProvider>{children}</ReduxProvider>
);

const mockToggleExpandSidebar = jest.spyOn(
	require('@/store/actions/page'),
	'toggleExpandSidebar'
);

describe('Header', () => {
	describe('<AuthenticatedHeader />', () => {
		it('should render correctly', () => {
			render(
				<ReduxProvider>
					<AuthenticatedHeader />
				</ReduxProvider>
			);

			const authenticatedHeader = screen.getByTestId('authenticated-header');
			const sidebarToggleButton = screen.getByTestId('sidebar-toggle');
			const logo = screen.getByTestId('logo');
			const avatarButton = screen.getByTestId('avatar-button');

			expect(authenticatedHeader).toBeVisible();
			expect(sidebarToggleButton).toBeVisible();
			expect(logo).toBeVisible();
			expect(avatarButton).toBeVisible();
		});

		it('should call toggleExpandSidebar action if sidebar toggle button is clicked', () => {
			render(
				<ReduxProvider>
					<AuthenticatedHeader />
				</ReduxProvider>
			);

			const sidebarToggleButton = screen.getByTestId('sidebar-toggle');

			fireEvent.click(sidebarToggleButton);
			expect(mockToggleExpandSidebar).toHaveBeenCalledTimes(1);
		});
	});

	describe('<UnauthenticatedHeader />', () => {
		it('should render correctly', () => {
			render(<UnauthenticatedHeader />);

			const unauhenticatedHeader = screen.getByTestId('unauthenticated-header');
			const loginButton = screen.getByRole('link', {
				name: /login/i,
			});
			const signUpButton = screen.getByRole('link', {
				name: /get started/i,
			});

			expect(unauhenticatedHeader).toBeVisible();
			expect(loginButton).toBeVisible();
			expect(signUpButton).toBeVisible();
		});
	});
});
