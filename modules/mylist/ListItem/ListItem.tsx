import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

import { TrashLightIcon } from '@/components/icons';
import { Title } from '@/components/typhographies';
import Button from '@/components/ui/Button';
import Tooltip from '@/components/ui/Tooltip';

import classes from './ListItem.module.sass';
import { ListItemProps } from './ListItem.types';

const ListItem: FC<ListItemProps> = ({
	title,
	sourceName,
	sourceURL,
	imgURL = '/',
	className,
	onDelete,
	...args
}) => (
	<li className={clsx(classes.ListItem, className)} {...args}>
		<div className={classes.ItemMain}>
			<div>
				<Link href='/' passHref>
					<a>
						<Title as='h2' className={clsx(classes.ItemTitle, 'mb0p25')}>
							{title}
						</Title>
					</a>
				</Link>
				<Link href={sourceURL}>
					<a data-testid='item-source' className={classes.ItemSource}>
						{sourceName}
					</a>
				</Link>
			</div>
			<div className={clsx(classes.ItemActionContainer, 'mt1p5')}>
				<Tooltip text='Delete' pos='top'>
					<Button
						startIcon={<TrashLightIcon />}
						variant='text'
						color='dark'
						size='lg'
						className={classes.ItemAction}
						iconClassName={classes.ItemActionIcon}
						onClick={onDelete}
					/>
				</Tooltip>
			</div>
		</div>
		<Link href='/' passHref>
			<a className={classes.ItemImgContainer}>
				<Image
					src={imgURL}
					className={classes.ItemImg}
					layout='fill'
					alt={title}
				/>
			</a>
		</Link>
	</li>
);

ListItem.displayName = 'ListItem';

export default ListItem;
