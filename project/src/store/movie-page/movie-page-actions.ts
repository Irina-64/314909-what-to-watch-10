import { createAction } from '@reduxjs/toolkit';
import { LoadAction } from '../../const/enums';
import TReview from '../../types/comment';
import Film from '../../types/film';

export const loadCurrentMovie = createAction<Film>(LoadAction.LoadCurrentMovie);

export const loadSimilarMovies = createAction<Film[]>(LoadAction.LoadSimilarMovies);

export const loadReviews = createAction<TReview[]>(LoadAction.LoadReviews);
