import clsx from 'clsx';
import { FC } from 'react';

import CloseIcon from '@/components/icons/CloseIcon';
import DangerIcon from '@/components/icons/DangerIcon';
import InfoIcon from '@/components/icons/InfoIcon';
import SuccessIcon from '@/components/icons/SuccessIcon';
import WarningIcon from '@/components/icons/WarningIcon';
import { capitalize } from '@/utils/global';

import classes from './Toast.module.sass';
import { ToastProps } from './Toast.types';
import { Title, Text } from '@/components/typhographies';
import Button from '../Button/Button';

const Toast: FC<ToastProps> = ({
	title,
	description,
	variant = 'danger',
	onClose,
	className,
	...args
}) => {
	const variantIcons = {
		danger: <DangerIcon />,
		warning: <WarningIcon />,
		info: <InfoIcon />,
		success: <SuccessIcon />,
	};

	return (
		<div
			className={clsx(classes.Toast, classes[capitalize(variant)], className)}
			data-testid='toast'
			{...args}
		>
			<div className={classes.ToastVL}></div>
			<i className={classes.ToastIcon}>{variantIcons[variant]}</i>
			<div className={classes.ToastMain}>
				<Title as='h5' size='sm' className={classes.ToastTitle}>
					{title}
				</Title>
				<Text data-testid='toast-desc' size='sm' className={classes.ToastDesc}>
					{description}
				</Text>
			</div>
			<Button
				size='xs'
				variant='text'
				className={classes.CloseBtn}
				startIcon={<CloseIcon />}
				onClick={onClose}
			/>
		</div>
	);
};

export default Toast;
