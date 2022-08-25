import { DetailHTMLProps } from '@/types';

export interface ArticleListItemProps extends DetailHTMLProps<HTMLLIElement> {
	title: string;
	sourceName: string;
	sourceURL: string;
	imgURL: string;
	onDelete: () => void;
}
