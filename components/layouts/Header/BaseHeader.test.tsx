import { render, screen } from '@testing-library/react';

import BaseHeader from './BaseHeader';

describe('Header/<BaseHeader>', () => {
	it('should render correctly', () => {
		render(<BaseHeader />);

		const baseHeader = screen.getByTestId('header');

		expect(baseHeader).toBeVisible();
	});
});
