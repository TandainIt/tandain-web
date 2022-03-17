import { render, screen } from '@testing-library/react';

import Logo from '../../../../components/ui/Logo/Logo';

describe('Logo/<Logo>', () => {
	it('should render correctly', () => {
		render(<Logo />);

		const logo = screen.getByTestId('logo');

		expect(logo).toBeVisible();
	});
});
