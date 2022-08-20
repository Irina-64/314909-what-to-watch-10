import React from 'react';
import { Genre } from '../const/enums';
import Film from './film';

type ReviewProps = {
  handleReviewChange: ({ target, value }: { target: string, value: string | number }) => void;
  onSubmitClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type FilmCardProps = {
  movie: Film;
  activeMovieId: number | null;
  handleMouseEvent: (id: number | null) => void;
};

type GenreProps = {
  genre: Genre;
  selectedGenre: Genre;
  handleGenreClick: (genre: Genre) => void;
};

type ShowMoreButtonProps = {
  totalFilmCount: number;
  renderedFilmsCount: number;
  handleShowMoreButtonClick: (count: number) => void;
};

export type {
  ReviewProps,
  FilmCardProps,
  GenreProps,
  ShowMoreButtonProps,
};
