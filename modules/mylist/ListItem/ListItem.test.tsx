import { fireEvent, render, screen } from '@testing-library/react';

import ListItem from './ListItem';

describe('mylist/ListItem', () => {
	it('should render correctly', () => {
		const onDeleteMock = jest.fn();

		const item = {
			title: 'Title',
			sourceName: 'Source Name',
			sourceURL: '/',
			imgURL: '/temp/my-list-item-img.png',
		};

		render(
			<ListItem
				title={item.title}
				sourceName={item.sourceName}
				sourceURL={item.sourceURL}
				imgURL={item.imgURL}
				onDelete={onDeleteMock}
			/>
		);

		const imgItem = screen.getByRole('img');
		const titleItem = screen.getByRole('heading');
		const sourceItem = screen.getByText(item.sourceName);
		const deleteButton = screen.getByRole('button');

		fireEvent.click(deleteButton);

		expect(imgItem).toHaveAttribute('src');
		expect(titleItem).toHaveTextContent(item.title);
		expect(sourceItem).toHaveAttribute('href', item.sourceURL);
		expect(onDeleteMock).toHaveBeenCalled();
	});
});
