import { render, screen } from '@testing-library/react';

import Signup from '../../pages/signup';

describe('pages/login', () => {
	it('should render correctly', () => {
		render(<Signup />);

		const unauthenticatedHeader = screen.getByTestId('unauthenticated-header');
		const signupSection = screen.getByTestId('signup-section');

		expect(unauthenticatedHeader).toBeVisible();
		expect(signupSection).toBeVisible();
	});
});
