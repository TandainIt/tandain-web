import { FC } from 'react';

import classes from './Page.module.scss';

import { PageProps } from './Page.types';

const Page: FC<PageProps> = ({ className, children }) => (
	<div data-testid='page' className={`${classes.Page} ${className}`}>
		{children}
	</div>
);

export default Page;
