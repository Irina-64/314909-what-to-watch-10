import dayjs from 'dayjs';
import MovieTabDetails from '../components/movies/movie-tabs/tab-details/tab-details';
import MovieTabOverview from '../components/movies/movie-tabs/tab-overview/tab-overview';
import MovieTabReviews from '../components/movies/movie-tabs/tab-reviews/tab-reviews';
import { ALL_GENRES, MAX_GENRE_INDEX, MOVIE_CARD_MAIN_COUNT } from '../const/const';
import { RatingName, RatingValue, AuthStatus, Genre, FilmNavigation } from '../const/enums';
import Film from '../types/film';
import TReview from '../types/review';

export const setMinutesToHoursAndMinutes = (totalMinutes: number, forPlayer = true) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  return forPlayer
    ? `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:00`
    : `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
};

export const getFilmsToLoadCount = (movies: Film[], renderedFilmCount: number) => Math.min((movies.length - renderedFilmCount), MOVIE_CARD_MAIN_COUNT);
export const getCurrentGenres = (movies: Film[]) => {
  const genres = [ALL_GENRES, ...new Set(movies.map((movie) => movie.genre))];
  const maxIndex = Math.min((genres.length - 1), MAX_GENRE_INDEX);
  return genres.slice(0, maxIndex);
};
export const getTabElement = (selectedTab: FilmNavigation, movie: Film, reviews: TReview[]) => {
  switch (selectedTab) {
    case FilmNavigation.Overview:
      return <MovieTabOverview {...movie} />;
    case FilmNavigation.Details:
      return <MovieTabDetails {...movie} />;
    case FilmNavigation.Reviews:
      return <MovieTabReviews reviews={reviews} />;
  }
};

export const getRatingName = (rating: number) => {
  switch (true) {
    case rating < RatingValue.Normal:
      return RatingName.Bad;
    case rating < RatingValue.Good:
      return RatingName.Normal;
    case rating < RatingValue.VeryGood:
      return RatingName.Good;
    case rating < RatingValue.Awesome:
      return RatingName.VeryGood;
    case rating === RatingValue.Awesome:
      return RatingName.Awesome;
  }
};

export const filterFavorites = (movies: readonly Film[]) => movies.filter((movie) => movie.isFavorite);

export const filterFilmsByGenre = (movies: Film[], genre: Genre) =>
  genre === ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre);

export const checkAuth = (authStatus: AuthStatus, reference: AuthStatus): boolean => authStatus === reference;

export const checkFilmId = (movies: Film[] | null, id: number) => movies ? movies.some((movie) => movie.id === id) : false;

export const humanizeTime = (time: number, forPlayer = true) => {
  const time1 = time % 60;
  const time2 = Math.floor(time / 60);
  const time3 = Math.floor(time2 / 60);

  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  if (forPlayer) {
    return time > 60
      ? `${padTo2Digits(time3)}:${padTo2Digits(time2)}:${padTo2Digits(time1)}`
      : `${padTo2Digits(time2)}:${padTo2Digits(time1)}`;
  }

  return `${padTo2Digits(time2)}h ${padTo2Digits(time1)}m`;
};

export const humanizeRuntime = (runtime: number) => humanizeTime(runtime, false);

export const humanizeCommentDate = (date: string) => dayjs(date).format('MMMM D, YYYY');

export const humanizeGenreName = (genre: Genre) => genre.replace(/([A-Z])/g, ' $1').trim();

export const validateEmail = (email: string) => {
  const emailRegexp = /\S+@\S+\.\S+/;
  return emailRegexp.test(email) && email.length > 0;
};

export const validatePassword = (password: string) => {
  const lettersRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const minLengthRegExp = /.{2,}/;

  const hasLetters = lettersRegExp.test(password.toLowerCase());
  const hasDigits = digitsRegExp.test(password);
  const hasMinLength = minLengthRegExp.test(password);

  return hasLetters && hasDigits && hasMinLength;
};
