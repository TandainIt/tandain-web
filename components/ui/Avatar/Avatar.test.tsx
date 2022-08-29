import { fireEvent, render, screen } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar/<Avatar />', () => {
	it('should render correctly', () => {
		render(<Avatar />);

		const avatarButton = screen.getByTestId('avatar-button');
		const avatarDefaultImg = screen.getByTestId('user-icon');

		expect(avatarButton).toBeVisible();
		expect(avatarDefaultImg).toBeVisible();
	});

	it('should show user image based on src props', () => {
		const imgURL = '/temp/my-list-item-img.png';
		render(<Avatar src={imgURL} />);

		const avatarButton = screen.getByTestId('avatar-button');
		const avatarImg = screen.getByTestId('avatar-img');

		expect(avatarButton).toBeVisible();
		expect(avatarImg).toBeVisible();
		expect(avatarImg).toHaveAttribute('src');
	});

	it('should show the menu if avatar button is clicked', () => {
		const { container } = render(<Avatar />);

		const avatarButton = screen.getByTestId('avatar-button');

		fireEvent.click(avatarButton);
		const avatarMenu = container.querySelector('#avatar-menu');

		expect(avatarButton).toBeVisible();
		expect(avatarMenu).toBeVisible();

    fireEvent.click(avatarButton);
    expect(avatarMenu).not.toBeVisible();
	});

	it('should hide the menu if the menu is shown and avatar button is clicked', () => {
		const { container } = render(<Avatar />);

		const avatarButton = screen.getByTestId('avatar-button');

		fireEvent.click(avatarButton);
		fireEvent.mouseDown(document);

		const avatarMenu = container.querySelector('#avatar-menu');

		expect(avatarButton).toBeVisible();
		expect(avatarMenu).toBeFalsy();
	});
});
