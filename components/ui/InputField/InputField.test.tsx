import { LinkIcon } from '@/components/icons';
import { render, screen } from '@testing-library/react';

import InputField from './InputField';

describe('ui/<InputField />', () => {
	it('should render correctly with Medium class as default size', () => {
		render(<InputField />);

		const inputWrapper = screen.getByTestId('input-wrapper');
		const inputField = screen.getByRole('textbox');

		expect(inputWrapper).toHaveClass('Medium');
		expect(inputField).toBeVisible();
	});

	it('shoul render with startIcon', () => {
		render(<InputField startIcon={<LinkIcon />} />);

		const inputWrapper = screen.getByTestId('input-wrapper');
		const inputField = screen.getByRole('textbox');

		expect(inputField).toBeVisible();
		expect(inputWrapper.firstChild).toHaveClass('Icon');
	});

	it('shoul render with startIcon', () => {
		render(<InputField startIcon={<LinkIcon />} />);

		const inputWrapper = screen.getByTestId('input-wrapper');
		const inputField = screen.getByRole('textbox');

		expect(inputField).toBeVisible();
		expect(inputWrapper.firstChild).toHaveClass('Icon');
	});

	it('shoul render with endIcon', () => {
		render(<InputField endIcon={<LinkIcon />} />);

		const inputWrapper = screen.getByTestId('input-wrapper');
		const inputField = screen.getByRole('textbox');

		expect(inputField).toBeVisible();
		expect(inputWrapper.lastChild).toHaveClass('Icon');
	});
});
