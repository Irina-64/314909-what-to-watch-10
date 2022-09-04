import { UNKNOWN_ACTION } from '../../const/const';
import { currentFilmInitialState } from '../../const/initial-states';
import { testUtils } from '../../utilites/mocks/test-utilites';
import { currentFilm } from './current-movie';
import { addReviewAction, fetchCurrentFilmDataAction } from './movie-api-actions';

const {mockCurrentFilm, mockReviews, mockReview, mockSimilarFilms} = testUtils();

const mockCurrentFilmData = {
  movie: mockCurrentFilm,
  reviews: mockReviews,
  similar: mockSimilarFilms
};

describe('Reducer: currentFilm', () => {
  const state = currentFilmInitialState;

  it('without additional parameters should return initial state', () => {
    expect(currentFilm.reducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(currentFilmInitialState);
  });

  describe('fetchCurrentFilmAction test', () => {
    it('should set isLoading to true if fetchCurrentFilmAction is pending', () => {
      expect(currentFilm.reducer(state, { type: fetchCurrentFilmDataAction.pending.type}))
        .toEqual({...state, isLoaded: false});
    });

    it('should load current movie data and set isLoading to false if fetchCurrentFilmAction was fulfilled', () => {
      expect(currentFilm.reducer(state, { type: fetchCurrentFilmDataAction.fulfilled.type, payload: mockCurrentFilmData}))
        .toEqual({...state, data: mockCurrentFilmData, isLoaded: true});
    });
  });

  describe('addReviewAction test', () => {
    it('should set isAddingReview to false if addReviewAction was fulfilled', () => {
      expect(currentMovie.reducer(state, { type: addReviewAction.fulfilled.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: false});
    });

    it('should set isAddingReview to false if addReviewAction was rejected', () => {
      expect(currentMovie.reducer(state, { type: addReviewAction.rejected.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: false});
    });

    it('should set isAddingReview to true if addReviewAction is pending', () => {
      expect(currentFilm.reducer(state, { type: addReviewAction.pending.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: true});
    });
  });
});
