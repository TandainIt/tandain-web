import { DetailHTMLProps } from '@/types';

export type ToastVariants = 'danger' | 'warning' | 'info' | 'success';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface Toast {
	title: string;
	message: string;
	variant: 'danger' | 'warning' | 'info' | 'success';
	isShow: boolean;
}

type ToastExt = DetailHTMLProps<HTMLDivElement> & PartialBy<Toast, 'variant'>;

export interface ToastProps extends ToastExt {
	onClose: () => void;
}
