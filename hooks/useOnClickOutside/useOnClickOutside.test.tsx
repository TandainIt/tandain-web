import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { createRef } from 'react';

import useOnClickOutside from './useOnClickOutside';

describe('hooks/useOnClickOutside', () => {
	it('calls handler when click is outside element', () => {
		// Arrange
		const handler = jest.fn();
		const test = jest.fn();
		const ref = createRef<HTMLDivElement>();
		render(<div ref={ref}></div>);

		// Act
		renderHook(() => useOnClickOutside(ref, handler));
		const mouseDownEvent = new Event('mousedown');
		document.dispatchEvent(mouseDownEvent);

		// Assert
		expect(handler).toBeCalledTimes(1);
	});

	it(`doesn't calls handler when click is within element`, () => {
		// Arrange
		const handler = jest.fn();
		const ref = createRef<HTMLDivElement>();
		render(<div ref={ref} data-testid='element-testid'></div>);

		const divEl = screen.getByTestId('element-testid');

		// Act
		renderHook(() => useOnClickOutside(ref, handler));
		const mouseDownEvent = new Event('mousedown');
		divEl.dispatchEvent(mouseDownEvent);

		//  Assert
		expect(handler).not.toBeCalled();
	});
});
