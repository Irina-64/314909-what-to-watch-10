import dayjs from 'dayjs';
import { RatingName, RatingValue } from '../const/enums';
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

export const getRandomInteger = (a: number, b: number) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

export const findMovieById = (movies: readonly Film[], id?: string) => movies.find((movie) => movie.id.toString() === id);

export const filterFavoriteMovies = (movies: readonly Film[]) => movies.filter((movie) => movie.isFavorite);

