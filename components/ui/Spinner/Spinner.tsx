import clsx from 'clsx';
import { FC } from 'react';

import { ComponentProps } from '@/utils/types';
import classes from './Spinner.module.sass';

const Spinner: FC<ComponentProps<HTMLDivElement>> = ({
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
