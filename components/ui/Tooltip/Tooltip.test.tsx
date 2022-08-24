import { render, screen } from '@testing-library/react';

import Tooltip from './Tooltip';

describe('Tooltip/<Tooltip>', () => {
	it('should render correctly', () => {
		render(<Tooltip text='Lorem ipsum'></Tooltip>);

		const tooltipContainer = screen.getByTestId('tooltip-container');
		const tooltipText = screen.getByTestId('tooltip-text');

		expect(tooltipContainer).toBeVisible();
		expect(tooltipText).toHaveTextContent('Lorem ipsum');
	});
});
