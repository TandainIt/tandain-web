import { render, screen } from '@testing-library/react';

import ListIcon from '../../icons/ListIcon';
import NavItem from './NavItem';

describe('Sidebar/<NavItem>', () => {
	it('should render correctly', () => {
		render(
			<NavItem
				startIcon={<ListIcon />}
				href='/mylist'
				className='mx0p25'
				isExpanded={false}
			>
				My List
			</NavItem>
		);

		const navItem = screen.getByRole('link');
		const navItemLabel = screen.getByTestId('nav-item-label');

		expect(navItem).toBeVisible();
		expect(navItem).toHaveAttribute('href', '/mylist');

		expect(navItem.firstChild).not.toHaveClass('Expanded');
		expect(navItem.firstChild).not.toHaveClass('Active');

		expect(navItemLabel).toHaveTextContent('My List');
	});
	it('should render with the class of Expanded', () => {
		render(
			<NavItem
				startIcon={<ListIcon />}
				href='/mylist'
				className='mx0p25'
				isExpanded
			>
				My List
			</NavItem>
		);

		const navItem = screen.getByRole('link');

		expect(navItem.firstChild).toHaveClass('Expanded');
	});
	it('should render with the class of Active', () => {
		render(
			<NavItem
				startIcon={<ListIcon />}
				href='/mylist'
				className='mx0p25'
				isExpanded={false}
				isActive
			>
				My List
			</NavItem>
		);

		const navItem = screen.getByRole('link');

		expect(navItem.firstChild).toHaveClass('Active');
	});
});
