import { FC } from 'react';
import clsx from 'clsx';

import { Text, Title } from '@/components/typhographies';
import { Button, InputField, Spinner } from '@/components/ui';
import { CloseIcon, LinkIcon } from '@/components/icons';

import classes from './MyListHeader.module.sass';
import { MyListHeaderProps } from './MyListHeader.types';

const MyListHeader: FC<MyListHeaderProps> = ({
	className,
	showForm,
	formError,
	isAddArticleLoading,
	toggleShowForm,
	onSubmitNewArticle,
	...rest
}) => {
	if (showForm) {
		return (
			<form
				role='form'
				className={clsx(classes.MyListHeaderForm, className)}
				onSubmit={onSubmitNewArticle}
			>
				<div className='w-full'>
					<InputField
						startIcon={<LinkIcon />}
						className='w-full'
						placeholder='Save a URL https://...'
						autoFocus
					/>
					{formError && (
						<Text size='xs' color='danger'>
							{formError}
						</Text>
					)}
				</div>
				<div className='flex items-center gap-3'>
					<Button className={classes.SubmitBtn} disabled={isAddArticleLoading}>
						{isAddArticleLoading ? <Spinner size='sm' /> : 'Add'}
					</Button>
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
