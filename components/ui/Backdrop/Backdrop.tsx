import { FC } from 'react';

import { BackdropProps } from './Backdrop.types';

import classes from './Backdrop.module.sass';

const Backdrop: FC<BackdropProps> = ({ className, onClick }) => (
	<div
		data-testid='backdrop'
		onClick={onClick}
		className={`${classes.Backdrop} ${className}`}
	></div>
);

export default Backdrop;
