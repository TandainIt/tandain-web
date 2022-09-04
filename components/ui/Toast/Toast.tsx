import clsx from 'clsx';
import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
	CloseIcon,
	DangerIcon,
	InfoIcon,
	SuccessIcon,
	WarningIcon,
} from '@/components/icons';
import { Title, Text } from '@/components/typhographies';
import { Button } from '@/components/ui';

import classes from './Toast.module.sass';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { hideToast } from '@/store/actions/toast';
import { capitalize } from '@/utils/global';

export const useAppToast = () => {
	const { asPath } = useRouter();
	const dispatch = useAppDispatch();

	const toast = useAppSelector(({ toast }) => toast);

	function onClose() {
		dispatch(hideToast());
	}

	useEffect(() => {
		/**
		 * Hide Toast whenever route is change
		 */

		if (!!toast.message) hideToast();
	}, [asPath]); // eslint-disable-line

	return { toast, onClose };
};

const Toast: FC = () => {
	const { toast, onClose } = useAppToast();
	const { title, message, variant, isShow } = toast;

	const icons = {
		danger: <DangerIcon />,
		warning: <WarningIcon />,
		info: <InfoIcon />,
		success: <SuccessIcon />,
	};

	return (
		<div
			className={clsx(
				classes.Toast,
				classes[capitalize(variant)],
				isShow && classes.ToastShow
			)}
			data-testid='toast'
		>
			<div className={classes.ToastVL}></div>
			<i className={classes.ToastIcon}>{icons[variant]}</i>
			<div className={classes.ToastMain}>
				<Title as='h5' size='sm' className={classes.ToastTitle}>
					{title}
				</Title>
				<Text
					data-testid='toast-message'
					size='sm'
					className={classes.ToastDesc}
				>
					{message}
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
