import { FC } from 'react';
import clsx from 'clsx';

import { Title } from '@/components/typhographies';
import { Button, InputField } from '@/components/ui';
import { CloseIcon, LinkIcon } from '@/components/icons';

import classes from './MyListHeader.module.sass';
import { MyListHeaderProps } from './MyListHeader.types';

const MyListHeader: FC<MyListHeaderProps> = ({
	showForm,
	className,
	toggleShowForm,
	...rest
}) => {
	if (showForm) {
		return (
			<form role='form' className={clsx(classes.MyListHeaderForm, className)}>
				<InputField
					startIcon={<LinkIcon />}
					className='w-full'
					placeholder='Save a URL https://...'
					autoFocus
				/>
				<div className='flex items-center gap-3'>
					<Button className={classes.SubmitBtn}>Add</Button>
					<Button
						data-testid='close-btn'
						startIcon={<CloseIcon />}
						variant='text'
						size='xs'
						className={classes.CloseBtn}
						onClick={toggleShowForm}
					/>
				</div>
			</form>
		);
	}

	return (
		<div
			data-testid='mylist-header'
			className={clsx(classes.MyListHeader, className)}
			{...rest}
		>
			<Title data-testid='list-title'>My List</Title>
			<Button onClick={toggleShowForm}>Add Inspiration</Button>
		</div>
	);
};

export default MyListHeader;
