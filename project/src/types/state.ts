import { AuthStatus, Genre } from '../const/enums';
import { store } from '../store/index';
import { TCurrentMovieData, TData, TMainPageData, TUserData } from './data';
import Film from './film';

export type State = ReturnType<typeof store.getState>;

export type TPlayerState = {
  movie: Film,
  isPlaying: boolean,
  progress?: number,
  isMuted: boolean;
}

export type TReviewState = {
  rating: number;
  comment: string | null;
}

export type CurrentMovieInitialState = TData<TCurrentMovieData>;

export type SimilarMoviesInitialState = TData<Film[]>;

export type UserDataInitialState = TData<TUserData> & {
  authStatus: AuthStatus;
};

export type AddReviewPageInitialState = {
  review: TReviewState | null;
};

export type MainPageInitialState = TData<TMainPageData> & {selectedGenre: Genre};
