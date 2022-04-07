import { ReactNode } from 'react';

import { BaseButtonProps } from '../BaseButton';

export interface ButtonProps extends BaseButtonProps {
	variant?: 'solid' | 'outlined' | 'text';
	color?: 'primary' | 'dark';
	size?: 'md' | 'lg';
  iconClassName?: string;
	startIcon?: ReactNode;
  round?: Boolean 
}
