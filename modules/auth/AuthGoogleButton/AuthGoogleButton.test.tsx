import { render, screen } from '@testing-library/react';

import AuthGoogleButton from './AuthGoogleButton';

describe('AuthGoogleButton/<AuthGoogleButton>', () => {
	it('should render correctly', () => {
		render(<AuthGoogleButton />);

		const googleButton = screen.getByRole('button');

		expect(googleButton).toBeVisible();
		expect(googleButton).toHaveClass('AuthGoogleButton');
		expect(googleButton.querySelector('#google-icon')).toBeTruthy();
	});
});
