import { Genre } from '../const/enums';
import { store } from '../store/index';
import TReview from './comment';
import { TData } from './data';
import Film from './film';

export type AppInitialState = Omit<TData, 'data'>

export type MainPageInitialState = {
  movies: TData<Film[]>;
  promo: TData<Film | null>;
  favorites: TData<Film[]>
  selectedGenre: Genre;
};

export type MovieInitialState = {
  currentMovie: Omit<TData<Film | null>, 'isDataLoaded'> & { reviews: TReview[], isIdOK: boolean };
  similarMovies: Omit<TData<Film[]>, 'isDataLoaded'>;
};

export type PromoInitialState = TData<Film | null>;

export type State = ReturnType<typeof store.getState>;
