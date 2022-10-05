import clsx from 'clsx';
import { FC } from 'react';

import classes from './Spinner.module.sass';
import { sizes } from '@/utils/variables';
import { SpinnerProps } from './Spinner.types';

const Spinner: FC<SpinnerProps> = ({ className, size = 'md', ...rest }) => (
	<div
		data-testid='spinner'
		className={clsx(classes.Spinner, classes[sizes[size]], className)}
		{...rest}
	></div>
);

export default Spinner;
