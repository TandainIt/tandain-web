import { render, screen } from '@testing-library/react';

import BaseButton from './BaseButton';

describe('Button/<BaseButton>', () => {
	it('should render as button element', () => {
		render(<BaseButton />);

		const button = screen.getByRole('button');

		expect(button).toBeVisible();
	});

	it('should render as anchor element', () => {
		render(<BaseButton as='a' href='#' />);

		const button = screen.getByRole('link');

		expect(button).toBeVisible();
	});
});
