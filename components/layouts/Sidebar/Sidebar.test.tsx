import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { AppProvider } from '../../../pages/_app';
import Sidebar, { useSidebar } from './Sidebar';
import * as pageActions from '@/store/actions/page/page';

const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');
const mockToggleExpandSidebar = jest.spyOn(pageActions, 'toggleExpandSidebar');

describe('Sidebar', () => {
	describe('useSidebar', () => {
		describe('toggleSidebar', () => {
			it('should call toggleExpandSidebar actions', () => {
				const { result } = renderHook(() => useSidebar(), {
					wrapper: AppProvider,
				});

				act(() => {
					result.current.toggleSidebar();
				});

				expect(mockToggleExpandSidebar).toHaveBeenCalledTimes(1);
			});
		});
	});

	describe('<Sidebar />', () => {
		mockUseRouter.mockImplementation(() => ({
			pathname: '/mylist',
		}));

		it('should render correctly', () => {
			render(
				<AppProvider>
					<Sidebar />
				</AppProvider>
			);

			const sidebar = screen.getByTestId('sidebar');
			const sidebarBackdrop = screen.getByTestId('sidebar-backdrop');
			const sidebarMenu = screen.getByTestId('sidebar-menu');

			const navList = screen.getByRole('navigation');

			const sidebarMyListItem = screen.getByTestId('sidebar-mylist-item');

			expect(sidebar).toBeVisible();
			expect(sidebarBackdrop).toBeVisible();
			expect(sidebarMenu).toBeVisible();

			expect(navList.childElementCount).toEqual(1);
			expect(navList.childNodes[0]).toHaveAttribute('href', '/mylist');

			expect(sidebarMyListItem).toBeVisible();
		});

		it('and SidebarNavItem should toggle the class of Expanded and Active when sidebar toggle menu is clicked', () => {
			render(
				<AppProvider>
					<Sidebar />
				</AppProvider>
			);

			const sidebar = screen.getByTestId('sidebar');
			const sidebarBackdrop = screen.getByTestId('sidebar-backdrop');
			const sidebarMenu = screen.getByTestId('sidebar-menu');

			expect(sidebar).toHaveClass('Expanded');
			expect(sidebarBackdrop).toHaveClass('Show');

			fireEvent.click(sidebarMenu);

			expect(sidebar).not.toHaveClass('Expanded');
			expect(sidebarBackdrop).not.toHaveClass('Show');
		});
	});
});

// Reference: https://jamespotz.github.io/blog/how-to-mock-userouter
