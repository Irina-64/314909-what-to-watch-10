import { AuthStatus, Genre } from '../const/enums';
import { store } from '../store/index';
import { TCurrentFilmData, TData, TMainPageData, TUserInfo } from './data';
import Film from './film';

export type State = ReturnType<typeof store.getState>;

export type TPlayerState = {
  progress: number;
  time: number;
  isPlaying: boolean;
  isMuted: boolean;
};

export type CurrentFilmState = TData<TCurrentFilmData> & {
  isAddingReview: boolean;
};

export type UserDataState = {
  userInfo: TUserInfo | null;
  favorites: TData<Film[]>; 
  authStatus: AuthStatus;
};

export type MainPageState = TData<TMainPageData> & {selectedGenre: Genre};
