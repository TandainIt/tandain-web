import { DetailHTMLProps } from '@/types';

export interface MyListHeaderProps extends DetailHTMLProps<HTMLDivElement> {
	showForm?: boolean;
	toggleShowForm: () => void;
}
