import { render, screen } from '@testing-library/react';

import Backdrop from './Backdrop';

describe('Backdrop/<Backdrop>', () => {
	it('should render correctly', () => {
		render(<Backdrop data-testid='backdrop' />);

		const backdrop = screen.getByTestId('backdrop');

		expect(backdrop).toBeVisible();
	});
});
