import { ReactNode } from 'react';

import { BaseButtonProps } from '../BaseButton';

export interface ButtonProps extends BaseButtonProps {
	variant?: 'solid' | 'outlined' | 'text';
	color?: 'primary' | 'dark';
	size?: 'md';
	startIcon?: ReactNode;
  round?: Boolean 
}
