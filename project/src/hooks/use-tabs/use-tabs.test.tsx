import { cleanup, renderHook} from '@testing-library/react';
import { FilmNavigation } from '../../const/enums';
import { getTabElement } from '../../utilites/utilites';
import { testUtils } from '../../utilites/mocks/test-utilites';
import { act } from 'react-dom/test-utils';
import useTabs from './use-tabs';

const {wrapper, mockCurrentFilm, mockReviews} = testUtils();

describe('Hook: useTabs', () => {
  beforeEach(cleanup);

  it('should return tabElement', () => {
    const correctTabElement = getTabElement(FilmNavigation.Overview, mockCurrentFilm, mockReviews);
    const {result: {current: {tabElement}}} = renderHook(() =>
      useTabs(mockCurrentFilm, mockReviews), {wrapper}
    );

    expect(tabElement.key).toEqual(correctTabElement.key);
  });

  it('should return activeTab', async () => {
    const {result} = renderHook(() =>
      useTabs(mockCurrentFilm, mockReviews), {wrapper}
    );

    expect(result.current.activeTab).toBe(MovieNavigation.Overview);
  });

  it('should return handlers', () => {
    const {result} = renderHook(() =>
      useTabs(mockCurrentFilm, mockReviews), {wrapper}
    );

    const {
      handleTabEvent,
    } = result.current;

    expect(handleTabEvent).toBeInstanceOf(Function);
  });

  it('should set activeTab when handleTabEvent is called', async () => {
    const mockSelectedTab = FilmNavigation.Reviews;
    const correctTabElement = getTabElement(mockSelectedTab, mockCurrentFilm, mockReviews);

    const {result} = renderHook(() =>
      useTabs(mockCurrentFilm, mockReviews), {wrapper}
    );

    expect(result.current.activeTab).toBe(FilmNavigation.Overview);

    act(() => result.current.handleTabEvent(mockSelectedTab));

    expect(result.current.activeTab).toBe(mockSelectedTab);
    expect(result.current.tabElement.key).toEqual(correctTabElement.key);
  });
});
