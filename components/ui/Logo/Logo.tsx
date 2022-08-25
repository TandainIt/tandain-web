import { FC } from 'react';
import Image from 'next/image';

import classes from './Logo.module.sass';
import { LogoProps } from './Logo.types';

const Logo: FC<LogoProps> = ({ isFull, ...rest }) => (
	<div className={classes.Logo} {...rest}>
		<Image
			src={'/logo48.jpg'}
			width={40}
			height={40}
			layout='fixed'
			alt='logo'
		/>
		<span className={classes.Text} id='logo-text'>
			Tandain
		</span> 
	</div>
);

export default Logo;
