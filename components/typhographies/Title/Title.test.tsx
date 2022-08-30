import { render } from '@testing-library/react';

import Title from './Title';

describe('Title/<Title>', () => {
	it('should render heading tags correctly', () => {
		const { container } = render(
			<>
				<Title as='h1' />
				<Title as='h2' />
				<Title as='h3' />
				<Title as='h4' />
				<Title as='h5' />
				<Title as='h6' />
			</>
		);

		expect(container.querySelector('h1')).toBeVisible();
		expect(container.querySelector('h2')).toBeVisible();
		expect(container.querySelector('h3')).toBeVisible();
		expect(container.querySelector('h4')).toBeVisible();
		expect(container.querySelector('h5')).toBeVisible();
		expect(container.querySelector('h6')).toBeVisible();
	});

	it('should render correct size based on its tag', () => {
		const { container } = render(
			<>
				<Title as='h1' />
				<Title as='h2' />
				<Title as='h3' />
				<Title as='h4' />
				<Title as='h5' />
				<Title as='h6' />
			</>
		);

		expect(container.querySelector('h1')).toHaveClass('ExtraLarge');
		expect(container.querySelector('h2')).toHaveClass('Large');
		expect(container.querySelector('h3')).toHaveClass('Medium');
		expect(container.querySelector('h4')).toHaveClass('Small');
		expect(container.querySelector('h5')).toHaveClass('ExtraSmall');
		expect(container.querySelector('h6')).toHaveClass('ExtraExtraSmall');
	});

	it('should render correct size based on its size attribute', () => {
    const { container } = render(
			<>
				<Title as='h1' size='xs' />
				<Title as='h2' size='sm' />
				<Title as='h3' size='xl' />
				<Title as='h4' size='lg' />
				<Title as='h5' size='xl' />
				<Title as='h6' size='md' />
			</>
		);

		expect(container.querySelector('h1')).toHaveClass('ExtraSmall');
		expect(container.querySelector('h2')).toHaveClass('Small');
		expect(container.querySelector('h3')).toHaveClass('ExtraLarge');
    expect(container.querySelector('h4')).toHaveClass('Large');
		expect(container.querySelector('h5')).toHaveClass('ExtraLarge');
    expect(container.querySelector('h6')).toHaveClass('Medium');
	});
});
