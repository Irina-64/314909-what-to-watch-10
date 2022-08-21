import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import Film from '../../types/film';
import { State } from '../../types/state';

export const fetchPromoAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchPromo,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const fetchAllMoviesAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchFilms,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Movies);
    return data;
  },
);
