import { FC } from 'react';

import { GoogleIcon } from '@/components/icons';
import { Button } from '@/components/ui';

import classes from './AuthGoogleButton.module.sass';

const AuthGoogleButton: FC = ({ children }) => (
	<Button className={classes.AuthGoogleButton} startIcon={<GoogleIcon />}>
		{children}
	</Button>
);

export default AuthGoogleButton;
