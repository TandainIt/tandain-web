import { DetailHTMLProps } from '@/types';

export type AvatarMenuProps = DetailHTMLProps<HTMLDivElement>;

export interface AvatarButtonProps extends DetailHTMLProps<HTMLButtonElement>  {
	src?: string;
}

export interface AvatarProps extends AvatarButtonProps {
	menuClassName?: string;
}
