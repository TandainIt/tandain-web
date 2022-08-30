import { render, screen } from '@testing-library/react';

import GoogleOauthLoading from '@/pages/auth/google-oauth';
import { sendAuthCodeToWindowParent } from '@/modules/auth/utils/auth';

jest.mock('@/modules/auth/utils/auth', () => {
	return {
		sendAuthCodeToWindowParent: jest.fn(),
	};
});

describe('modules/auth/GoogleOauthLoadingPage', () => {
	it('should show spinner when it is waiting window opener', () => {
		render(<GoogleOauthLoading />);

		const spinner = screen.getByTestId('spinner');

		expect(spinner).toBeVisible();
	});

	it('should call sendAuthCodeToWindowParent and close the window if window opener is detected', () => {
		window.opener = {};
		window.close = jest.fn();

		render(<GoogleOauthLoading />);

		expect(sendAuthCodeToWindowParent).toHaveBeenCalled();
		expect(window.close).toHaveBeenCalled();
	});
});
