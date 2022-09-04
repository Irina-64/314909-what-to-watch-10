import { testUtils } from '../../utilites/mocks/test-utilites';
import { getAddReviewState, getCurrentFilm, getCurrentFilmState, getReviews, getSimilarFilms } from './movie-selectors';

const {mockStoreData} = testUtils();

describe('Selectors: currentFilm', () => {
  const state = mockStoreData;

  describe('getCurrentFilmState test', () => {
    it('should return state', () => {
      const selected = getCurrentFilmState(state);

      expect(selected)
        .toEqual(state.CURRENT);
    });
  });

  describe('getAddReviewState test', () => {
    it('should return review adding status', () => {
      const selected = getAddReviewState(state);

      expect(selected)
        .toEqual(state.CURRENT.isAddingReview);
    });
  });

  describe('getCurrentFilm test', () => {
    it('should return current movie', () => {
      const selected = getCurrentFilm(state);

      expect(selected)
        .toEqual(state.CURRENT.data.movie);
    });
  });


  describe('getReviews test', () => {
    it('should return reviews', () => {
      const selected = getReviews(state);

      expect(selected)
        .toEqual(state.CURRENT.data.reviews);
    });
  });

  describe('getSimilarFilms test', () => {
    it('should return similar movies', () => {
      const selected = getSimilarFilms(state);

      expect(selected)
        .toEqual(state.CURRENT.data.similar);
    });
  });
});
