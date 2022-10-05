import { DetailHTMLProps } from '@/types';
import { sizes } from '@/utils/variables';

export interface SpinnerProps extends DetailHTMLProps<HTMLDivElement> {
	size?: keyof typeof sizes;
}
