import { FC } from 'react';

import classes from './Tooltip.module.sass';
import { TooltipProps } from './Tooltip.types';

const Tooltip: FC<TooltipProps> = ({
	className = '',
	children,
	text,
	pos = 'right',
}) => (
	<div
		data-testid='tooltip-container'
		className={`${classes.tooltip} ${classes[pos]}`}
	>
		{children}
		<span
			data-testid='tooltip-text'
			className={`${classes.text}  ${className}`}
		>
			{text}
		</span>
	</div>
);

export default Tooltip;
