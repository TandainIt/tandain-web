import { FormEvent } from 'react';
import { DetailHTMLProps } from '@/types';

export interface MyListHeaderProps extends DetailHTMLProps<HTMLDivElement> {
	showForm?: boolean;
	isAddArticleLoading: boolean;
	formError?: string;
	toggleShowForm: () => void;
	onSubmitNewArticle: (e: FormEvent) => void;
}
