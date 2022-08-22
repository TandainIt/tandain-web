import { FC } from 'react';

import BaseButton from '@/components/ui/BaseButton';
import Title from '@/components/typhographies/Title';

import classes from './Footer.module.sass';

const Footer: FC = () => (
	<footer data-testid='footer' className={classes.Container}>
		<div>
			<Title as='h5' className='my0p5'>
				Tandain
			</Title>
			<ul>
				<li className='my0p25'>
					<BaseButton as='a' href='/about'>
						About
					</BaseButton>
				</li>
			</ul>
		</div>
	</footer>
);

export default Footer;
