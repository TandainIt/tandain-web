import { render, screen } from '@testing-library/react';

import UnauthenticatedHeader from '../../../../components/layouts/Header/UnauthenticatedHeader';

describe('Header/<UnauthenticatedHeader />', () => {
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
