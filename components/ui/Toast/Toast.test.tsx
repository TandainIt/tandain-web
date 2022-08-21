import { fireEvent, render, screen } from '@testing-library/react';
import Toast from './Toast';

describe('Toast', () => {
	it('should render correctly', () => {
		const onCloseMock = jest.fn();

		render(
			<Toast
				title='Toast'
				description='This is toast description'
				onClose={onCloseMock}
			/>
		);

		const toast = screen.getByTestId('toast');
		const toastTitle = screen.getByRole('heading');
		const toastDescription = screen.getByTestId('toast-desc');
		const toastCloseBtn = screen.getByRole('button');

		fireEvent.click(toastCloseBtn);

		expect(toast).toBeVisible();
		expect(toastTitle).toBeVisible();
		expect(toastTitle).toHaveTextContent('Toast');
		expect(toastDescription).toBeVisible();
		expect(toastDescription).toHaveTextContent('This is toast description');
		expect(toastCloseBtn).toBeVisible();
		expect(onCloseMock).toHaveBeenCalled();
	});

	it('should render its variants correctly', () => {
		const args = {
			title: 'Toast',
			description: 'This is toast description',
			onClose: () => {},
		};

		const { container: dangerContainer } = render(
			<Toast variant='danger' {...args} />
		);
		const { container: warningContainer } = render(
			<Toast variant='warning' {...args} />
		);
		const { container: infoContainer } = render(
			<Toast variant='info' {...args} />
		);
		const { container: successContainer } = render(
			<Toast variant='success' {...args} />
		);

		expect(dangerContainer.querySelector('.Danger')).toBeVisible();
		expect(dangerContainer.querySelector('svg#danger-icon')).toBeVisible();

		expect(warningContainer.querySelector('.Warning')).toBeVisible();
		expect(warningContainer.querySelector('svg#warning-icon')).toBeVisible();

		expect(infoContainer.querySelector('.Info')).toBeVisible();
		expect(infoContainer.querySelector('svg#info-icon')).toBeVisible();

		expect(successContainer.querySelector('.Success')).toBeVisible();
		expect(successContainer.querySelector('svg#success-icon')).toBeVisible();
	});
});
