import { ChangeEvent } from 'react';
import Film from './film';

type MainProps = {
  promo: Film;
  movies: readonly Film[];
  genres: readonly string[];
  myMovies: Film[];
  randomMovie: Film
}

type ReviewProps = {
  handleReviewChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type {
  MainProps,
  ReviewProps
};
