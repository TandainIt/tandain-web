import { FC } from 'react';

import classes from './Backdrop.module.sass';
import { DetailHTMLProps } from '@/types';

const Backdrop: FC<DetailHTMLProps<HTMLDivElement>> = ({
	className,
	onClick,
	...rest
}) => (
	<div
		onClick={onClick}
		className={`${classes.Backdrop} ${className}`}
		{...rest}
	></div>
);

export default Backdrop;
