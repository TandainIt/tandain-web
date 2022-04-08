import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('typhographies/Label', () => {
	it('should render correctly', () => {
		render(<Label data-testid='label'>Label</Label>);

		const label = screen.getByTestId('label');

		expect(label).toHaveTextContent(/label/i);
	});

	it('should render with the correct variant classes', () => {
		render(
			<>
				<Label variant='sans-serif'>Sans Serif</Label>
				<Label variant='serif'>Serif</Label>
			</>
		);

		const sansSerifLabel = screen.getByText('Sans Serif');
		const serifLabel = screen.getByText('Serif');

		expect(sansSerifLabel).toHaveClass('SansSerif');
		expect(serifLabel).toHaveClass('Serif');
	});
});
