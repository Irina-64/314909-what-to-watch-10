import { CurrentMovieState, MainPageState, UserDataState } from '../types/state';
import { ALL_GENRES } from './const';
import { AuthStatus } from './enums';

export const mainPageInitialState: MainPageState = {
  data: {
    movies: [],
    promo: null,
  },
  selectedGenre: ALL_GENRES,
  isLoaded: false,
};

export const currentMovieInitialState: CurrentMovieState = {
  data: {
    movie: null,
    reviews: [],
    similar: [],
  },
  isLoaded: false,
  isAddingReview: false,
};

export const userInitialState: UserDataState = {
  userInfo: null,
  favorites: {
    data: [],
    isLoaded: false
  },
  authStatus: AuthStatus.Unknown,
};

export const playerInitialState = {
  progress: 0,
  time: 0,
  isPlaying: true,
  isMuted: false,
};

export const reviewInitialState = {
  rating: 0,
  comment: null
};

export const authDataInitialState = {
  login: '',
  password: ''
};

export const isDisabledInitialState = {
  form: false,
  button: true
};

export const selectedGenreInitialState = ALL_GENRES;
