import Film from './film';
import TReview from './review';

export type TData<T = null> = {
  data: T;
  isLoading?: boolean;
}

export type TAuthData = {
  login: string;
  password: string;
};

export type TCurrentMovieData = {
  movie: Film | null;
  reviews: TReview[];
}

export type TMainPageData = {
  movies: Film[];
  promo: Film | null;
}

export type FilmPageData = {
  similarMovies: Film[];
}

export type TUserInfo = {
  avatarUrl: string
  email: string
  id: number
  name: string
  token: string
  };

export type TUserData = {
    userInfo: TUserInfo | null;
    favorites: Film[];
  }
