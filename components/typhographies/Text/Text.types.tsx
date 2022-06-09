import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { fontTypes, sizes } from '@/utils/variables';

export interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	as?: 'span' | 'p';
	font?: keyof typeof fontTypes;
  size?: keyof typeof sizes
}
