import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import Film from '../../types/film';
import { State } from '../../types/state';

const SIMILAR_MOVIES_URL_SUFFIX = '/similar';

export const fetchSimilarMoviesAction = createAsyncThunk<Film[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchSimilarFilms,
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Film[]>(`${APIRoute.Movies}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
    return data;
  },
);
