import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ListItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	title: string;
	sourceName: string;
	sourceURL: string;
	imgURL: string;
	onDelete: () => void;
}
