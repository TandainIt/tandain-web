import { ButtonProps } from '../../ui/Button';

export interface NavItemProps extends ButtonProps {
	children: String;
	isActive?: Boolean;
	isExpanded: Boolean;
}
