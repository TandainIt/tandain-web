import { AppProvider } from '@/pages/_app';
import { fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import Toast, { useAppToast } from './Toast';
import * as toastActions from '@/store/actions/toast/toast';

const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');
const mockAppSelector = jest.spyOn(
	require('@/hooks/useAppSelector'),
	'useAppSelector'
);
const mockHideToast = jest.spyOn(toastActions, 'hideToast');

describe('Toast', () => {
	mockUseRouter.mockReturnValue({
		asPath: '/',
	});

	describe('useAppToast', () => {
		it('should return initial state of toast store', () => {
			const { result } = renderHook(() => useAppToast(), {
				wrapper: AppProvider,
			});

			expect(result.current).toEqual({
				toast: {
					title: null,
					message: null,
					variant: 'success',
					isShow: false,
				},
				onClose: expect.any(Function),
			});
			expect(mockHideToast).not.toHaveBeenCalled();
		});

		it('should call hideToast action when onClose is called', () => {
			const { result } = renderHook(() => useAppToast(), {
				wrapper: AppProvider,
			});

			act(() => {
				result.current.onClose();
			});

			expect(mockHideToast).toHaveBeenCalledTimes(1);
		});

		it('should call hideToast action when asPath is changed', () => {
			renderHook(() => useAppToast(), {
				wrapper: AppProvider,
			});

			mockUseRouter.mockReturnValue({
				asPath: '/mylist',
			});

			expect(mockHideToast).toHaveBeenCalledTimes(1);
		});
	});

	describe('<Toast />', () => {
		it('should render correctly', () => {
			mockAppSelector.mockReturnValue({
				title: 'Title',
				message: 'Message',
				variant: 'danger',
				isShow: true,
			});

			render(
				<AppProvider>
					<Toast />
				</AppProvider>
			);

			const toast = screen.getByTestId('toast');
			const toastTitle = screen.getByRole('heading');
			const toastMessage = screen.getByTestId('toast-message');
			const toastCloseBtn = screen.getByRole('button');
			fireEvent.click(toastCloseBtn);

			expect(toast).toBeVisible();
			expect(toast).toHaveClass('ToastShow');
			expect(toastTitle).toBeVisible();
			expect(toastTitle).toHaveTextContent('Title');
			expect(toastMessage).toBeVisible();
			expect(toastMessage).toHaveTextContent('Message');
			expect(toastCloseBtn).toBeVisible();
			expect(mockHideToast).toHaveBeenCalled();
		});

		it('should render danger variant', () => {
			mockAppSelector.mockReturnValue({
				title: 'Title',
				message: 'Message',
				variant: 'danger',
				isShow: true,
			});

			render(
				<AppProvider>
					<Toast />
				</AppProvider>
			);

			const toast = screen.getByTestId('toast');

			expect(toast).toHaveClass('Danger');
		});

		it('should render warning variant', () => {
			mockAppSelector.mockReturnValue({
				title: 'Title',
				message: 'Message',
				variant: 'warning',
				isShow: true,
			});

			render(
				<AppProvider>
					<Toast />
				</AppProvider>
			);

			const toast = screen.getByTestId('toast');

			expect(toast).toHaveClass('Warning');
		});

		it('should render info variant', () => {
			mockAppSelector.mockReturnValue({
				title: 'Title',
				message: 'Message',
				variant: 'info',
				isShow: true,
			});

			render(
				<AppProvider>
					<Toast />
				</AppProvider>
			);

			const toast = screen.getByTestId('toast');

			expect(toast).toHaveClass('Info');
		});

		it('should render success variant', () => {
			mockAppSelector.mockReturnValue({
				title: 'Title',
				message: 'Message',
				variant: 'success',
				isShow: true,
			});

			render(
				<AppProvider>
					<Toast />
				</AppProvider>
			);

			const toast = screen.getByTestId('toast');

			expect(toast).toHaveClass('Success');
		});
	});
});
