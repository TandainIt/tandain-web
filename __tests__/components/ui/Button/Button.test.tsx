import { render, screen } from '@testing-library/react';
import GoogleIcon from '../../../../components/icons/GoogleIcon';

import Button from '../../../../components/ui/Button/Button';

describe('Button/<Button>', () => {
	it('should render with default variant, color, and size', () => {
		render(<Button />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Button Medium SolidPrimary');
	});

  it('should render with startIcon', () => {
		render(<Button startIcon={<GoogleIcon />}/>);

		const button = screen.getByRole('button');

		expect(button.firstChild).toHaveClass('Icon');
	});

	it('should render with the class of Outlined and Primary', () => {
		render(<Button variant='outlined' />);

		const button = screen.getByRole('button');

		expect(button).toHaveClass('Button OutlinedPrimary');
	});
});
