import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Logo/<Logo>', () => {
	it('should render correctly', () => {
		render(<Logo />);

		const logo = screen.getByTestId('logo');

		expect(logo).toBeVisible();
	});
});
