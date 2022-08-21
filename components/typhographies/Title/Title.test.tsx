import { render } from '@testing-library/react';
import Title from './Title';

describe('Title/<Title>', () => {
	it('should render heading tags correctly', () => {
		const { container: h1Container } = render(<Title as='h1' />);
		const { container: h2Container } = render(<Title as='h2' />);
		const { container: h3Container } = render(<Title as='h3' />);
		const { container: h5Container } = render(<Title as='h5' />);

		expect(h1Container.querySelector('h1')).toBeVisible();
		expect(h2Container.querySelector('h2')).toBeVisible();
		expect(h3Container.querySelector('h3')).toBeVisible();
		expect(h5Container.querySelector('h5')).toBeVisible();
	});

	it('should render correct size based on its tag', () => {
		const { container: h1Container } = render(<Title as='h1' />);
		const { container: h2Container } = render(<Title as='h2' />);
		const { container: h3Container } = render(<Title as='h3' />);
    const { container: h4Container } = render(<Title as='h4' />);
		const { container: h5Container } = render(<Title as='h5' />);

		expect(h1Container.querySelector('h1')).toHaveClass('ExtraExtraExtraLarge');
		expect(h2Container.querySelector('h2')).toHaveClass('ExtraExtraLarge');
		expect(h3Container.querySelector('h3')).toHaveClass('ExtraLarge');
    expect(h4Container.querySelector('h4')).toHaveClass('Large');
		expect(h5Container.querySelector('h5')).toHaveClass('Medium');
	});

	it('should render correct size based on its size attribute', () => {
		const { container: h1Container } = render(<Title as='h1' size='xs' />);
		const { container: h2Container } = render(<Title as='h2' size='xl' />);
		const { container: h3Container } = render(<Title as='h3' size='lg' />);
		const { container: h5Container } = render(<Title as='h5' size='md' />);

		expect(h1Container.querySelector('h1')).toHaveClass('ExtraSmall');
		expect(h2Container.querySelector('h2')).toHaveClass('ExtraLarge');
		expect(h3Container.querySelector('h3')).toHaveClass('Large');
		expect(h5Container.querySelector('h5')).toHaveClass('Medium');
	});
});
