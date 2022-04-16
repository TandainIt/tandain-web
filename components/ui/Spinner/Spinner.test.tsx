import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner/<Spinner />', () => {
	it('should render correctly', () => {
		render(<Spinner />);

		const spinner = screen.getByTestId('spinner');

		expect(spinner).toBeVisible();
	});
});
