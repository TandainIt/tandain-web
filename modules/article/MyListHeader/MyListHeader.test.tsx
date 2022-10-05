import { render, screen } from '@testing-library/react';
import MyListHeader from './MyListHeader';

describe('<MyListHeader />', () => {
	it('should render "My List" title and add inspiration button', () => {
		render(<MyListHeader toggleShowForm={() => {}} />);

		const myListTitle = screen.getByTestId('list-title');
		const addInspirationBtn = screen.getByRole('button', {
			name: 'Add Inspiration',
		});

		expect(myListTitle).toBeVisible();
		expect(addInspirationBtn).toBeVisible();
	});

	it('should render add inspiration form, submit button, and close button', () => {
		render(<MyListHeader showForm toggleShowForm={() => {}} />);

		const addInspirationForm = screen.getByRole('form');
		const subtmitBtn = screen.getByRole('button', { name: 'Add' });
		const closeBtn = screen.getByTestId('close-btn');

		expect(addInspirationForm).toBeVisible();
		expect(subtmitBtn).toBeVisible();
		expect(closeBtn).toBeVisible();
	});
});