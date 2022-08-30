import { FC } from 'react';

import { Title } from '@/components/typhographies';
import { Button } from '@/components/ui';

import classes from './Footer.module.sass';

const Footer: FC = () => (
	<footer data-testid='footer' className={classes.Container}>
		<div>
			<Title as='h5' className='my0p5'>
				Tandain
			</Title>
			<ul>
				<li className='my0p25'>
					<Button as='a' variant='base' href='/about'>
						About
					</Button>
				</li>
			</ul>
		</div>
	</footer>
);

export default Footer;
