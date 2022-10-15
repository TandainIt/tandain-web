import {
	cleanup,
	render,
	screen,
	renderHook,
	act,
} from '@testing-library/react';

import MyListPage from '@/pages/mylist';
import { AppProvider } from '@/pages/_app';
import { generateRandomString } from '@/utils/global';
import useMyListPage from './MyListPage.hooks';
import { FormEvent } from 'react';

const mockUseLazyQuery = jest
	.spyOn(require('@apollo/client'), 'useLazyQuery')
	.mockReturnValue([jest.fn(), { data: undefined }]);
const mockUseMutation = jest.spyOn(require('@apollo/client'), 'useMutation');
const mockUseAuth = jest.spyOn(require('@/modules/auth/hooks/auth'), 'useAuth');

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
	pathname: '/mylist',
	replace: jest.fn(),
}));

describe('pages/MyListPage', () => {
	beforeAll((done) => {
		done();
	});

	afterEach((done) => {
		done();
		cleanup();
	});

	describe('useMyListPage', () => {
		it('should return default value of list, showAddArticleForm, and isLoading correctly', (done) => {
			mockUseAuth.mockReturnValue({
				idToken: generateRandomString(128),
			});

			const { result } = renderHook(() => useMyListPage(), {
				wrapper: AppProvider,
			});

			const { list, showAddArticleForm, isLoading } = result.current;
			expect(list).toEqual([]);
			expect(showAddArticleForm).toEqual(false);
			expect(isLoading).toEqual(true);
			done();
		});

		it('should return article list if idToken is exists', async () => {
			const mockGetArticleList = jest.fn();
			const mockArticleList = [
				{
					id: 1,
					title: 'Title',
					sourceName: 'sourceName',
					sourceUrl: 'sourceURL',
					image: 'image',
				},
			];

			mockUseAuth.mockReturnValue({
				idToken: generateRandomString(128),
			});

			mockUseLazyQuery.mockReturnValue([
				mockGetArticleList,
				{ data: { articles: mockArticleList } },
			]);

			const { result } = renderHook(() => useMyListPage(), {
				wrapper: AppProvider,
			});

			expect(mockGetArticleList).toHaveBeenCalledWith({
				variables: { limit: 9 },
			});
			expect(result.current.list).toEqual(mockArticleList);
			expect(result.current.isLoading).toEqual(false);
		});

		it('should return isLoading equal to true when it is still fetching article list', () => {
			const mockGetArticleList = jest.fn();

			mockUseAuth.mockReturnValue({
				idToken: generateRandomString(128),
			});

			mockUseLazyQuery.mockReturnValue([
				mockGetArticleList,
				{ data: undefined },
			]);

			const { result } = renderHook(() => useMyListPage(), {
				wrapper: AppProvider,
			});

			expect(mockGetArticleList).toHaveBeenCalledWith({
				variables: { limit: 9 },
			});
			expect(result.current.list).toEqual([]);
			expect(result.current.isLoading).toEqual(true);
		});

		it('should not call useLazyQuery if idToken is not exists', () => {
			const mockGetArticleList = jest.fn();

			mockUseAuth.mockReturnValue({
				idToken: undefined,
			});

			mockUseLazyQuery.mockReturnValue([
				mockGetArticleList,
				{ data: undefined },
			]);

			const { result } = renderHook(() => useMyListPage(), {
				wrapper: AppProvider,
			});

			expect(mockGetArticleList).not.toHaveBeenCalled();
			expect(result.current.list).toEqual([]);
			expect(result.current.isLoading).toEqual(true);
		});

		describe('toggleShowAddArticleForm', () => {
			it('should toggle showAddArticleForm value', () => {
				const { result } = renderHook(() => useMyListPage(), {
					wrapper: AppProvider,
				});

				act(() => {
					result.current.toggleShowAddArticleForm();
				});

				expect(result.current.showAddArticleForm).toEqual(true);
			});

			it('should set articleValidationError to undefined if articleValidationError has a value', () => {
				const mockFormEvent = {
					preventDefault: jest.fn(),
					target: [{ value: 'notvalidurl' }],
				} as unknown as FormEvent<HTMLFormElement>;

				const { result } = renderHook(() => useMyListPage(), {
					wrapper: AppProvider,
				});

				act(() => {
					result.current.onSubmitNewArticle(mockFormEvent);
				});

				act(() => {
					result.current.toggleShowAddArticleForm();
				});

				expect(result.current.showAddArticleForm).toEqual(true);
				expect(result.current.articleValidationError).toEqual(undefined);
			});
		});

		describe('onSubmitNewArticle', () => {
			it('should set articleValidationError to "Oops, it is not a valid URL" if url is not valid', () => {
				const mockFormEvent = {
					preventDefault: jest.fn(),
					target: [{ value: 'notvalidurl' }],
				} as unknown as FormEvent<HTMLFormElement>;

				const { result } = renderHook(() => useMyListPage(), {
					wrapper: AppProvider,
				});

				act(() => {
					result.current.onSubmitNewArticle(mockFormEvent);
				});

				expect(result.current.articleValidationError).toEqual(
					'Oops, it is not a valid URL'
				);
			});

			it('should call addArticle, getArticleList, and set showAddArticleForm to false if submit new article is success', async () => {
				const mockURL = 'validurl.com';
				const mockGetArticleList = jest.fn();
				const mockAddArticle = jest.fn();

				const mockFormEvent = {
					preventDefault: jest.fn(),
					target: [{ value: mockURL }],
				} as unknown as FormEvent<HTMLFormElement>;

				mockUseLazyQuery.mockReturnValue([
					mockGetArticleList,
					{ data: undefined },
				]);

				mockUseMutation.mockReturnValue([mockAddArticle, { loading: true }]);

				const { result } = renderHook(() => useMyListPage(), {
					wrapper: AppProvider,
				});

				await act(async () => {
					await result.current.onSubmitNewArticle(mockFormEvent);
				});

				expect(mockAddArticle).toHaveBeenCalledWith({
					variables: { url: mockURL },
				});
				expect(mockGetArticleList).toHaveBeenCalledWith({
					variables: { limit: 9 },
				});
				expect(result.current.showAddArticleForm).toEqual(false);
			});
		});
	});

	describe('<MyListPage />', () => {
		it('should render correctly', () => {
			render(
				<AppProvider>
					<MyListPage />
				</AppProvider>
			);
			const authenticatedHeader = screen.getByTestId('authenticated-header');
			const sidebar = screen.getByTestId('sidebar');
			const myList = screen.getByTestId('list');
			const myListTitle = screen.getByTestId('list-title');
			expect(authenticatedHeader).toBeVisible();
			expect(sidebar).toBeVisible();
			expect(myList).toBeVisible();
			expect(myListTitle).toHaveTextContent(/my list/i);
		});

		it('should show article list', () => {
			const mockArticleList = [
				{
					id: 1,
					title: 'Title',
					sourceName: 'sourceName',
					sourceUrl: 'sourceURL',
					image: 'image',
				},
				{
					id: 2,
					title: 'Title 2',
					sourceName: 'sourceName',
					sourceUrl: 'sourceURL',
					image: 'image',
				},
			];

			mockUseAuth.mockReturnValue({
				idToken: generateRandomString(128),
			});

			mockUseLazyQuery.mockReturnValue([
				jest.fn(),
				{
					data: {
						articles: mockArticleList,
					},
				},
			]);

			render(
				<AppProvider>
					<MyListPage />
				</AppProvider>
			);

			const articleListItems = screen.getAllByTestId('article-list-item');

			expect(articleListItems.length).toEqual(mockArticleList.length);
		});

		it('should show loading spinner when it is still fetching article list', () => {
			mockUseAuth.mockReturnValue({
				idToken: generateRandomString(128),
			});

			mockUseLazyQuery.mockReturnValue([
				jest.fn(),
				{
					data: undefined,
				},
			]);

			render(
				<AppProvider>
					<MyListPage />
				</AppProvider>
			);

			const spinner = screen.getByTestId('spinner');
			expect(spinner).toBeVisible();
		});

		it('should show empty list image and text', () => {
			mockUseAuth.mockReturnValue({
				idToken: generateRandomString(128),
			});

			mockUseLazyQuery.mockReturnValue([
				jest.fn(),
				{
					data: {
						articles: [],
					},
				},
			]);

			render(
				<AppProvider>
					<MyListPage />
				</AppProvider>
			);

			const emptyListWrapper = screen.getByTestId('empty-list');
			expect(emptyListWrapper).toBeVisible();
		});
	});
});
