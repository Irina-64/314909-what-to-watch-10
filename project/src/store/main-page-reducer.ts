import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../const/enums';
import mockFilmList from '../mocks/films';
import mockFilmPromo from '../mocks/promo';
import { MainPageInitialState } from '../types/initial-states';
import { changeGenre, resetGenre } from './main-page-actions';

const initialState: MainPageInitialState = {
  promo: mockFilmPromo,
  movies: mockFilmList,
  selectedGenre: Genre.AllGenres,
};

const mainPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload !== state.selectedGenre ? action.payload : state.selectedGenre;
    })
    .addCase(resetGenre, (state) => {
      state.selectedGenre = initialState.selectedGenre;
    });
});

export default mainPageReducer;

