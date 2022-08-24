import { fireEvent, render, screen } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar/<Avatar />', () => {
	it('should render correctly', () => {
		// render(<AvatarMenu />);

		// const name = screen.getByTestId('name');
		// const email = screen.getByTestId('email');
		// const aboutButton = screen.getByText(/about/i);
		// const logoutButton = screen.getByText(/logout/i);

		// expect(name).toBeVisible();
		// expect(email).toBeVisible();
		// expect(aboutButton).toHaveAttribute('href', '/about');
		// expect(logoutButton).toBeVisible();

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
		render(<Avatar />);

		const avatarButton = screen.getByTestId('avatar-button');

		fireEvent.click(avatarButton);
		const avatarMenu = screen.getByTestId('avatar-menu');

		expect(avatarButton).toBeVisible();
		expect(avatarMenu).toBeVisible();
	});
});
