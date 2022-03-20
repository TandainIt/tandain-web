import { FC } from 'react';

import GoogleIcon from '../../../components/icons/GoogleIcon';
import Button from '../../../components/ui/Button';

import classes from './GoogleButton.module.scss';

const GoogleButton: FC = ({ children }) => (
	<Button className={classes.GoogleButton} startIcon={<GoogleIcon />}>
		{children}
	</Button>
);

export default GoogleButton;
