import { ComponentSizes, DetailHTMLProps } from '@/types';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends DetailHTMLProps<HTMLHeadingElement> {
	as?: TitleTags;
	size?: keyof ComponentSizes;
}
