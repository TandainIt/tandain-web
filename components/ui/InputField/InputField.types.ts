import { DetailHTMLProps } from '@/types';
import { ReactNode } from 'react';

export interface InputFieldProps extends DetailHTMLProps<HTMLInputElement> {
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	autoFocus?: boolean;
	size?: 'md' | 'lg';
}
