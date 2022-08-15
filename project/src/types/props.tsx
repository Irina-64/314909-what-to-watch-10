import { ChangeEvent } from 'react';
import Film from './film';

type MainProps = {
  promo: Film;
  movies: readonly Film[];
  genres: readonly string[];
  myMovies: Film[];
  randomMovie: Film;
};

type ReviewProps = {
  handleReviewChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

type FilmCardProps = {
  movie: Film;
  activeMovieId: number | null;
  isMuted?: boolean;
  isPreview?: boolean;
  handleMouseEvent: (id: number | null) => void;
  handleMouseOver: (movie: Film) => void;
};

export type {
  MainProps,
  ReviewProps,
  FilmCardProps
};
