import { fireEvent, render, screen } from '@testing-library/react';

import { ReduxProvider } from '../../../pages/_app';
import Sidebar from './Sidebar';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const renderSidebar = () => render(
  <ReduxProvider>
    <Sidebar />
  </ReduxProvider>
);

describe('Sidebar/<Sidebar>', () => {
	useRouter.mockImplementation(() => ({
		pathname: '/mylist',
	}));

	it('should render correctly', () => {
		renderSidebar();

		const sidebar = screen.getByTestId('sidebar');
		const sidebarBackdrop = screen.getByTestId('sidebar-backdrop');
		const sidebarMenu = screen.getByTestId('sidebar-menu');
		const navList = screen.getByRole('navigation');

		expect(sidebar).toBeVisible();
		expect(sidebarBackdrop).toBeVisible();
		expect(sidebarMenu).toBeVisible();
		expect(navList.childElementCount).toEqual(1);
		expect(navList.childNodes[0]).toHaveAttribute('href', '/mylist');
	});

	it('should have the class of Expanded when sidebar toggle menu is clicked', () => {
		renderSidebar();

		const sidebar = screen.getByTestId('sidebar');
		const sidebarBackdrop = screen.getByTestId('sidebar-backdrop');
		const sidebarMenu = screen.getByTestId('sidebar-menu');

		fireEvent.click(sidebarMenu);

		expect(sidebar).toHaveClass('Expanded');
		expect(sidebarBackdrop).toHaveClass('Show');

		fireEvent.click(sidebarMenu);

		expect(sidebar).not.toHaveClass('Expanded');
		expect(sidebarBackdrop).not.toHaveClass('Show');
	});
});

// Reference: https://jamespotz.github.io/blog/how-to-mock-userouter
