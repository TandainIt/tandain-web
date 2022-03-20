import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { FontSizeByTags, FontSizeByKeys } from './utils.types';

type HeadingElement = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export interface TitleProps extends HeadingElement {
	as?: keyof FontSizeByTags;
	size?: keyof FontSizeByKeys;
}
