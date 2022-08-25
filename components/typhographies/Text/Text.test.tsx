import { render, screen } from '@testing-library/react';

import Text from './Text';

describe('typhographies/Text', () => {
	it('should render correctly', () => {
		render(<Text data-testid='text'>Text</Text>);

		const text = screen.getByTestId('text');

		expect(text).toHaveTextContent(/text/i);
	});

	it('should render with the correct variant classes', () => {
		render(
			<>
				<Text font='sans-serif'>Sans Serif</Text>
				<Text font='serif'>Serif</Text>
			</>
		);

		const sansSerifLabel = screen.getByText('Sans Serif');
		const serifLabel = screen.getByText('Serif');

		expect(sansSerifLabel).toHaveClass('SansSerif');
		expect(serifLabel).toHaveClass('Serif');
	});

	it('should render with the correct size classes', () => {
		render(
			<>
				<Text size='xs'>Extra Small</Text>
				<Text size='sm'>Small</Text>
				<Text size='md'>Medium</Text>
				<Text size='lg'>Large</Text>
				<Text size='xl'>Extra Large</Text>
			</>
		);

		const extraSmallBtn = screen.getByText('Extra Small');
		const smallBtn = screen.getByText('Small');
		const mediumBtn = screen.getByText('Medium');
		const largeBtn = screen.getByText('Large');
		const extraLargeBtn = screen.getByText('Extra Large');

		expect(extraSmallBtn).toHaveClass('ExtraSmall');
		expect(smallBtn).toHaveClass('Small');
		expect(mediumBtn).toHaveClass('Medium');
		expect(largeBtn).toHaveClass('Large');
		expect(extraLargeBtn).toHaveClass('ExtraLarge');
	});
});
