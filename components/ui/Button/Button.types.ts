import { ReactNode } from 'react';

import { BaseButtonProps } from '../BaseButton';

export interface ButtonProps extends BaseButtonProps {
	variant?: 'solid' | 'outlined' | 'text';
	color?: 'primary';
	size?: 'sm' | 'md' | 'lg';
	startIcon?: ReactNode;
  round?: Boolean 
}
