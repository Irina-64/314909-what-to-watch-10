import {createAction} from '@reduxjs/toolkit';
import { LoadAction, Genre, ChangeAction } from '../../const/enums';
import Film from '../../types/film';

export const loadMovies = createAction<Film[]>(LoadAction.LoadMovies);

export const loadPromo = createAction<Film>(LoadAction.LoadPromo);

export const loadFavorites = createAction<Film[]>(LoadAction.LoadFavorites);

export const setGenre = createAction<Genre>(ChangeAction.ChangeGenre);
