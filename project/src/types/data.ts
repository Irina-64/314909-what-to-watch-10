import Film from './film';
import TReview from './review';

export type TData<T = null> = {
  data: T;
  isLoaded: boolean;
}

export type TAuthData = {
  login: string;
  password: string;
};

export type TCurrentFilmData = {
  movie: Film | null;
  reviews: TReview[];
  similar: Film[];
}

export type TMainPageData = {
  movies: Film[];
  promo: Film | null;
}

export type TUserInfo = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
  };

export type TUserData = {
    userInfo: TUserInfo | null;
    favorites: Film[];
  }
