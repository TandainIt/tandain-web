import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LabelProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	variant?: 'sans-serif' | 'serif';
}
