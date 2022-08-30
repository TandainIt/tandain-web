import { DetailHTMLProps } from '@/types';

export interface TooltipProps extends DetailHTMLProps<HTMLSpanElement> {
	text: String;
	pos?: 'top' | 'right' | 'bottom' | 'left';
}
