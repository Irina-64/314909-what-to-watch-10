import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getCurrentFilmState = (state: State) => state.CURRENT;

export const getIsFilmLoaded = createSelector(getCurrentFilmState, (state) => state.isLoaded);

export const getCurrentFilm = createSelector(getCurrentFilmState, (state) => state.data.movie);

export const getReviews = createSelector(getCurrentFilmState, (state) => state.data.reviews);

export const getSimilarFilms = createSelector(getCurrentFilmState, (state) => state.data.similar);

export const getAddReviewState = createSelector(getCurrentFilmState, (state) => state.isAddingReview);
