import { BaseButtonProps } from '../BaseButton';

export interface ButtonProps extends BaseButtonProps {
	variant?: 'solid' | 'outlined';
	color?: 'primary';
	size?: 'sm' | 'md' | 'lg';
}
