import { render, screen } from '@testing-library/react';

import GoogleButton from './GoogleButton';

describe('GoogleButton/<GoogleButton>', () => {
	it('should render correctly', () => {
		render(<GoogleButton></GoogleButton>);

		const googleButton = screen.getByRole('button');

		expect(googleButton).toBeVisible();
		expect(googleButton).toHaveClass('GoogleButton');
		expect(googleButton.querySelector('#google-icon')).toBeTruthy();
	});
});
