import { FC } from 'react';

import Title from '../../typhographies/Title';
import FooterListItem from './FooterListItem';

import classes from './Footer.module.scss';

const Footer: FC = () => (
	<footer data-testid='footer' className={classes.Container}>
		<div>
			<Title as='h5' className='mx0p5'>
				Tandain
			</Title>
			<ul>
				<FooterListItem href='/about' className='mx0p25'>
					About
				</FooterListItem>
			</ul>
		</div>
	</footer>
);

export default Footer;
