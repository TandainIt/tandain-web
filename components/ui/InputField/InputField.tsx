import { FC, forwardRef } from 'react';
import clsx from 'clsx';

import classes from './InputField.module.sass';
import { InputFieldProps } from './InputField.types';
import { sizes } from '@/utils/variables';

const InputField: FC<InputFieldProps> = forwardRef(
	({ size = 'md', startIcon, endIcon, className, autoFocus, ...rest }, ref) => (
		<div
			data-testid='input-wrapper'
			className={clsx(classes.InputWrapper, classes[sizes[size]], className)}
		>
			{startIcon && <i className={classes.Icon}>{startIcon}</i>}
			<input
				ref={ref}
				type='text'
				className={clsx(
					classes.Input,
					startIcon && classes.InputStartIcon,
					endIcon && classes.InputEndIcon
				)}
				placeholder='Placeholder'
				autoFocus={autoFocus}
				{...rest}
			/>
			{endIcon && <i className={classes.Icon}>{endIcon}</i>}
		</div>
	)
);

InputField.displayName = 'InputField';

export default InputField;
