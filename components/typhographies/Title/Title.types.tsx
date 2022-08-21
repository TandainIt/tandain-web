import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { sizes as fontSizeByKey } from '@/utils/variables';
import { fontSizeByTag } from './Title';

type HeadingElement = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

export interface TitleProps extends HeadingElement {
	as?: keyof typeof fontSizeByTag;
	size?: keyof typeof fontSizeByKey;
}
