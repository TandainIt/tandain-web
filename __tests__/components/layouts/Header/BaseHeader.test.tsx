import { render, screen } from '@testing-library/react';

import BaseHeader from '../../../../components/layouts/Header/BaseHeader';

describe('Header/<BaseHeader>', () => {
	it('should render correctly', () => {
		render(<BaseHeader data-testid='base-header' />);

		const baseHeader = screen.getByTestId('base-header');

		expect(baseHeader).toBeVisible();
	});
});
