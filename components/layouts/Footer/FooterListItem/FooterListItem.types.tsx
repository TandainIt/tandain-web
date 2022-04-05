import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

export interface FooterListItemProps
	extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	href: string | URL;
}
