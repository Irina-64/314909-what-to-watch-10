import { State } from '../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute, ChangeAction, AppRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import Film from '../../types/film';
import TReview from '../../types/review';
import { redirectToRoute } from '../common/common-actions';
import { TAddReviewData, TCurrentFilmData } from '../../types/data';
import { SIMILAR_MOVIES_URL_SUFFIX } from '../../const/const';

export const fetchCurrentFilmDataAction = createAsyncThunk<TCurrentFilmData, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchCurrentFilmData,
  async (id, {dispatch, extra: api}) => {
    const {data: movie} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    const {data: reviews} = await api.get<TReview[]>(`${APIRoute.Review}/${id}`);
    const {data: similar} = await api.get<Film[]>(`${APIRoute.Films}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
    return {movie, reviews, similar};
  },
);

export const addReviewAction = createAsyncThunk<void, TAddReviewData & {id: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ChangeAction.AddReview,
  async ({rating, comment, id}, {dispatch, extra: api}) => {
    await api.post<TReview[]>(`${APIRoute.Review}/${id}`, {comment, rating});
    dispatch(fetchCurrentFilmDataAction(id));
    dispatch(redirectToRoute(`${AppRoute.Films}${id}`));
  },
);
