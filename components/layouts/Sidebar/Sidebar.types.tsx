import { ButtonProps } from '@/components/ui/Button';

export interface SidebarNavItemProps extends Omit<ButtonProps, "color" | "size" | "variant" | "round" | "as"> {
	children: string;
	isActive?: boolean;
	isExpanded: boolean;
}
