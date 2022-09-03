import { render, screen } from '@testing-library/react';

import IndexPage from '@/pages';

describe('index/IndexPage', () => {
	it('should render correctly', () => {
		render(<IndexPage />);

		const header = screen.getByTestId('unauthenticated-header');
		const heroSection = screen.getByTestId('hero-section');
		const descSection = screen.getByTestId('desc-section');
		const ctaSection = screen.getByTestId('cta-section');

		expect(header).toBeVisible();
		expect(heroSection).toBeVisible();
		expect(descSection).toBeVisible();
		expect(ctaSection).toBeVisible();
	});
});
