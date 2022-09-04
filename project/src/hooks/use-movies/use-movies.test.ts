import { cleanup, renderHook} from '@testing-library/react';
import useFilms from './use-movies';
import { filterMoviesByGenre, getCurrentGenres, getFilmsToLoadCount } from '../../utilites/utilites';
import { testUtils } from '../../utilites/mocks/test-utilites';
import { setGenre } from '../../store/main-page/main-page-actions';
import { datatype } from 'faker';
import { act } from 'react-dom/test-utilites';
import { ALL_GENRES } from '../../const/const';

const {wrapper, mockStore, mockFilms, mockSelectedGenre } = testUtils();

describe('Hook: useFilms', () => {
  beforeEach(() => mockStore.dispatch(setGenre(ALL_GENRES)));
  beforeEach(cleanup);

  it('should return movies', () => {
    const {result} = renderHook(() =>
      useFilms(), {wrapper}
    );

    expect(result.current.movies).toBeInstanceOf(Array);
  });

  it('should return current genres', () => {
    const mockCurrentGenres = getCurrentGenres(mockFilms);
    const {result} = renderHook(() =>
      useFilms(), {wrapper}
    );

    const {currentGenres} = result.current;

    expect(currentGenres).toBeInstanceOf(Array);
    expect(currentGenres).toStrictEqual(mockCurrentGenres);
  });

  it('should return show more button click and genre click handlers', () => {
    const {result} = renderHook(() =>
      useFilms(), {wrapper}
    );

    expect(result.current.handleShowMoreButtonClick).toBeInstanceOf(Function);
    expect(result.current.handleGenreChange).toBeInstanceOf(Function);

  });

  it('should return moviesToLoadCount', async () => {
    const mockFilteredFilms = filterFilmsByGenre(mockFilms, mockSelectedGenre);
    const {result} = renderHook(() =>
      useFilms(), {wrapper}
    );

    const correctFilmsToLoadCount = getFilmsToLoadCount(mockFilteredFilms, result.current.renderedFilmCount);

    expect(result.current.moviesToLoadCount).toBe(correctFilmsToLoadCount);
  });


  it('should filter movies based on selected genre', async () => {
    const mockFilteredFilms = filterMoviesByGenre(mockFilms, mockSelectedGenre);

    const {result} = renderHook(() =>
      useFilms(), {wrapper}
    );

    expect(result.current.movies[1]).toBe(mockFilteredFilms[1]);
  });

  it('should update renderedMovieCount when showMoreButtonClick is called', async () => {
    const mockCount = datatype.number();

    const {result, result: {current: {renderedFilmCount}}} = renderHook(() =>
      useFilms(), {wrapper}
    );

    const mockNewRenderedFilmCount = Math.min(renderedFilmCount + mockCount, mockFilms.length);

    act(() => result.current.handleShowMoreButtonClick(mockCount));

    expect(result.current.renderedFilmCount).toBe(mockNewRenderedFilmCount);
  });
});
