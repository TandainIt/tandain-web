import { render, screen } from '@testing-library/react';

import Page from './Page';

describe('Page/<Page>', () => {
	it('it should render correctly', () => {
		render(<Page />);

		const page = screen.getByTestId('page');

		expect(page).toBeVisible();
	});
});
