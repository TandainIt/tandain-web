import { FC } from 'react';

import GoogleIcon from '../../../components/icons/GoogleIcon';
import Button, { ButtonProps } from '../../../components/ui/Button';

import classes from './GoogleButton.module.sass';

const GoogleButton: FC<ButtonProps> = ({ children, onClick }) => (
	<Button
		onClick={onClick}
		className={classes.GoogleButton}
		startIcon={<GoogleIcon />}
	>
		{children}
	</Button>
);

export default GoogleButton;
