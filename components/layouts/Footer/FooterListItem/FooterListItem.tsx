import { FC } from 'react';

import BaseButton from '@/components/ui/BaseButton';

import { FooterListItemProps } from './FooterListItem.types';

const FooterListItem: FC<FooterListItemProps> = ({
	children,
	href,
	className,
	...rest
}) => (
	<li className={className} {...rest}>
		<BaseButton as='a' href={href}>
			{children}
		</BaseButton>
	</li>
);

export default FooterListItem;
