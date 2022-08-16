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
  playerId: number;
  isMuted?: boolean;
  isPreview?: boolean;
  renderPlayer: (movie: Film, playerIndex: number, isPreview?: boolean, isMuted?: boolean) => JSX.Element;
  handleMouseEvent: (id: number | null) => void;
};

export type {
  MainProps,
  ReviewProps,
  FilmCardProps
};
