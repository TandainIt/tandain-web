import { FC } from 'react';

import { GoogleIcon } from '@/components/icons';
import { Button } from '@/components/ui';

import classes from './AuthGoogleButton.module.sass';
import { ButtonProps } from '@/components/ui/Button/Button.types';

const AuthGoogleButton: FC<ButtonProps> = ({ children, onClick }) => (
	<Button
		className={classes.AuthGoogleButton}
		startIcon={<GoogleIcon />}
		onClick={onClick}
	>
		{children}
	</Button>
);

export default AuthGoogleButton;
