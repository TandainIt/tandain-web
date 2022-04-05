import { render, screen } from '@testing-library/react';

import FooterListItem from './FooterListItem';

describe('Footer/<FooterListItem>', () => {
	it('should render correctly', () => {
		render(<FooterListItem href='#' />);

		const footerListItem = screen.getByRole('listitem');

		expect(footerListItem).toBeVisible();
		expect(footerListItem.firstChild).toHaveAttribute('href', '/#');
	});
});
