import { FC } from 'react';

import { PageProps } from './Page.types';

const Page: FC<PageProps> = ({ className, children }) => (
	<main data-testid='page' className={className}>
		{children}
	</main>
);

export default Page;
