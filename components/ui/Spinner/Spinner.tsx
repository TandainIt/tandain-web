import clsx from 'clsx';
import { FC } from 'react';

import classes from './Spinner.module.sass';
import { DetailHTMLProps } from '@/types';

const Spinner: FC<DetailHTMLProps<HTMLDivElement>> = ({
	className,
	...rest
}) => (
	<div
		data-testid='spinner'
		className={clsx(classes.Spinner, className)}
		{...rest}
	></div>
);

export default Spinner;
