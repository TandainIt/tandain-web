import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Logo/<Logo>', () => {
	it('should render in with the text in the big screen', () => {
		const { container } = render(<Logo isFull/>);

		const logoImg = screen.getByRole('img');
		const logoText = container.querySelector('#logo-text');

		expect(logoImg).toBeVisible();
		expect(logoText).toBeVisible();
	});

	it('should render in without the text in the small screen', () => {
		global.innerWidth = 768; // Set window with to be 768px

		const { container } = render(<Logo />);

		const logoImg = screen.getByRole('img');
		const logoText = container.querySelector('#logo-text');

		expect(logoImg).toBeVisible();
		expect(logoText).toEqual(null);
	});
});
