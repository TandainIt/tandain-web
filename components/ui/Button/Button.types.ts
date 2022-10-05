import { DetailHTMLProps } from '@/types';
import { ReactNode } from 'react';

export interface BaseButtonProps extends DetailHTMLProps<HTMLButtonElement> {
	as?: 'button' | 'a';
	href?: string | URL;
}

export interface ButtonProps extends BaseButtonProps {
	variant?: 'solid' | 'outlined' | 'text' | 'base';
	color?: 'primary' | 'dark';
	size?: 'xs' | 'sm' | 'md' | 'lg';
	iconClassName?: string;
	startIcon?: ReactNode;
	round?: Boolean;
	disabled?: Boolean;
}
