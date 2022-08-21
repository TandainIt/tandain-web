import { FC } from 'react';

import { GoogleIcon } from '@/components/icons';
import Button from '../../../components/ui/Button';

import classes from './GoogleButton.module.sass';

const GoogleButton: FC = ({ children }) => (
	<Button className={classes.GoogleButton} startIcon={<GoogleIcon />}>
		{children}
	</Button>
);

export default GoogleButton;
