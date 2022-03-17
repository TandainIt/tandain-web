import { render, screen } from '@testing-library/react';

import Page from '../../../../components/layouts/Page/Page';

describe('Page/<Page />', () => {
	it('should render correctly', () => {
		render(<Page />);

		const page = screen.getByRole('main');

		expect(page).toBeVisible();
	});
});
