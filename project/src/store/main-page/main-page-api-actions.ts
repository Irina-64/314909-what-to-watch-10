import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import Film from '../../types/film';
import { State } from '../../types/state';
import { TMainPageData } from '../../types/data';

export const fetchMainPageDataAction = createAsyncThunk<TMainPageData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchAllMovies,
  async (_arg, { dispatch, extra: api }) => {
    const { data: promo } = await api.get<Film>(APIRoute.Promo);
    const { data: movies } = await api.get<Film[]>(APIRoute.Movies);
    return {movies, promo};
  },
);
