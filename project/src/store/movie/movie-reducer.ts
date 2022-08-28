import { createReducer } from '@reduxjs/toolkit';
import { CurrentMovieInitialState } from '../../types/state';
import { fetchFilmAction, fetchReviewsAction } from './movie-api-actions';

const initialState: CurrentMovieInitialState = {
  data: {
    movie: null,
    reviews: []
  },
  isLoading: true
};

const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilmAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchFilmAction.rejected, (state) => {
      state.data.movie = initialState.data.movie;
      state.isLoading = false;
    })
    .addCase(fetchFilmAction.fulfilled, (state, action) => {
      state.data.movie = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchReviewsAction.rejected, (state) => {
      state.data.reviews = initialState.data.reviews;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.data.reviews = action.payload;
    });
});

export default movieReducer;
