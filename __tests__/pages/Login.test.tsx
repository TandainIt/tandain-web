import { render, screen } from '@testing-library/react';

import Login from '../../pages/login';

describe('pages/login', () => {
	it('should render correctly', () => {
		render(<Login />);

		const unauthenticatedHeader = screen.getByTestId('unauthenticated-header');

		expect(unauthenticatedHeader).toBeVisible();
	});
});
