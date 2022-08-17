import { Genre } from '../const/enums';
import Film from './film';

type ReviewProps = {
  handleReviewChange: ({ target, value }: { target: string, value: string | number }) => void;
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

export type {
  ReviewProps,
  FilmCardProps,
  GenreProps,
};
