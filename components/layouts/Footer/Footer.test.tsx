import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer/<Footer>', () => {
	it('should render correctly', () => {
		render(<Footer />);

		const footer = screen.getByTestId('footer');

		expect(footer).toBeVisible();
		expect(footer.querySelectorAll('h5').length).toEqual(1);
		expect(footer.querySelectorAll('li').length).toEqual(1);
	});
});
