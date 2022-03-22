import { render, screen } from '@testing-library/react';

import GoogleIcon from '../../icons/GoogleIcon';
import Button from './Button';

describe('Button/<Button>', () => {
	it('should render with default variant, color, and size', () => {
		render(<Button />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Button Medium SolidPrimary');
	});

	it('should render with startIcon', () => {
		render(<Button startIcon={<GoogleIcon />} />);

		const button = screen.getByRole('button');

		expect(button.firstChild).toHaveClass('Icon');
	});

  it('should render with icon only', () => {
		render(<Button startIcon={<GoogleIcon />} />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('IconOnly');
	});

	it('should render with the outlined variant and primary color', () => {
		render(<Button variant='outlined' />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Button OutlinedPrimary');
	});

  it('should render with the text variant and primary color', () => {
		render(<Button variant='text' />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Button TextPrimary');
	});

  it('should render with the rounded container', () => {
    render(<Button round />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Round');
  })
});
