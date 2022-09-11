import { cleanup, render, screen, renderHook } from '@testing-library/react';

import MyListPage, { useMyListPage } from '@/pages/mylist';
import { AppProvider } from '@/pages/_app';
import { generateRandomString } from '@/utils/global';

const mockUseLazyQuery = jest.spyOn(require('@apollo/client'), 'useLazyQuery');
const mockUseAuth = jest.spyOn(require('@/modules/auth/hooks'), 'useAuth');

jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
	pathname: '/mylist',
}));

describe('pages/MyListPage', () => {
	afterEach(() => {
		cleanup();
	});

	describe('useMyListPage', () => {
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
			expect(result.current.list).toEqual(undefined);
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
			expect(result.current.list).toEqual(undefined);
			expect(result.current.isLoading).toEqual(true);
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
