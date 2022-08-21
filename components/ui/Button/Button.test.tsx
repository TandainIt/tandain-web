import { render, screen } from '@testing-library/react';

import { GoogleIcon } from '@/components/icons';
import Button from './Button';

describe('Button/<Button>', () => {
	it('should render with default variant, color, and size', () => {
		render(<Button />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Button Medium Solid Primary');
	});

	it('should render with the correct variant classes', () => {
		render(
			<>
				<Button variant='solid'>Solid</Button>
				<Button variant='outlined'>Outlined</Button>
				<Button variant='text'>Text</Button>
			</>
		);

		const solidButton = screen.getByRole('button', { name: 'Solid' });
		const outlinedButton = screen.getByRole('button', { name: 'Outlined' });
		const textButton = screen.getByRole('button', { name: 'Text' });

		expect(solidButton).toHaveClass('Solid');
		expect(outlinedButton).toHaveClass('Outlined');
		expect(textButton).toHaveClass('Text');
	});

	it('should render with the correct color classes', () => {
		render(
			<>
				<Button color='primary'>Primary</Button>
				<Button color='dark'>Dark</Button>
			</>
		);

		const primaryButton = screen.getByRole('button', { name: 'Primary' });
		const darkButton = screen.getByRole('button', { name: 'Dark' });

		expect(primaryButton).toHaveClass('Primary');
		expect(darkButton).toHaveClass('Dark');
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

	it('should render with the rounded container', () => {
		render(<Button round />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Round');
	});
});
