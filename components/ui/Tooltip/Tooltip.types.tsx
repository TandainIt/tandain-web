import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TooltipProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	text: String;
	pos?: 'top' | 'right' | 'bottom' | 'left';
}
