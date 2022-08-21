import dayjs from 'dayjs';
import { RatingName, RatingValue, AuthorizationStatus, Genre, Favorite } from '../const/enums';
import Film from '../types/film';

export const minutesToHoursAndMinutes = (totalMinutes: number, forPlayer = true) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  return forPlayer
    ? `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:00`
    : `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
};

export const humanizeRuntime = (runtime: number) => minutesToHoursAndMinutes(runtime, false);

export const humanizeCommentDate = (date: string) => dayjs(date).format('MMMM D, YYYY');

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

export const filterMoviesByGenre = (movies: Film[], genre: Genre) => {
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  return filteredMovies.length === 0 ? null : filteredMovies;
};

export const checkAuth = (authorizationStatus: AuthorizationStatus, reference: AuthorizationStatus): boolean => authorizationStatus === reference;

export const getFavoriteStatus = (isFavorite: boolean) => isFavorite ? Favorite.SetNotFavorite : Favorite.SetFavorite;

export const checkFilm = (movie: Film | null | undefined, id: string | undefined) => !movie || movie.id.toString() !== id;

export const checkFilmId = (movies: Film[], id: number) => movies.some((movie) => movie.id === id);
