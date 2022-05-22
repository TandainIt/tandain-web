import { FC } from 'react';

import Title from '@/components/typhographies/Title';
import FooterListItem from './FooterListItem';

import classes from './Footer.module.sass';

console.log('Meta URL: ', import.meta.url)

const Footer: FC = () => (
	<footer data-testid='footer' className={classes.Container}>
		<div>
			<Title as='h5' className='my0p5'>
				Tandain
			</Title>
			<ul>
				<FooterListItem href='/about' className='my0p25'>
					About
				</FooterListItem>
			</ul>
		</div>
	</footer>
);

export default Footer;
