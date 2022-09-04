import { cleanup, renderHook} from '@testing-library/react';
import { testUtils } from '../../utilites/mocks/test-utilites';
import useCurrentMovie from './use-current-movie';

const {wrapper, mockCurrentFilm, mockReviews, mockSimilarFilms} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentFilm.id,
  }),
}));

describe('Hook: useCurrentMovie', () => {
  beforeEach(cleanup);

  it('should return current movie', () => {
    const {result} = renderHook(() =>
      useCurrentFilm(), {wrapper}
    );

    expect(result.current.movie).toBe(mockCurrentFilm);
  });

  it('should return reviews', () => {
    const {result} = renderHook(() =>
      useCurrentFilm(), {wrapper}
    );

    expect(result.current.reviews[1]).toStrictEqual(mockReviews[1]);
  });

  it('should return similarMovies', () => {
    const {result} = renderHook(() =>
      useCurrentFilm(), {wrapper}
    );

    expect(result.current.similar[1]).toBe(mockSimilarFilms[1]);
  });
});
