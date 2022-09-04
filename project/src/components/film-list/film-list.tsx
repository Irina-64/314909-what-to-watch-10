import React, { PropsWithChildren } from 'react';
import useFilmCard from '../../hooks/use-movie-card/use-movie-card';
import Film from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmCardsListProps = {
  movies: Film[];
  testId: string;
}

const FilmCardsList = ({movies, children, testId}: PropsWithChildren<FilmCardsListProps>) => {
  const {activeFilmId, handleFilmMouseOver} = useFilmCard();

  return (
    <>
      <div className="catalog__films-list" data-testid={testId}>
        {movies.map(
          (movie: Film) => <FilmCard key={`${movie.id}-${movie.name}`} movie={movie} activeFilmId={activeFilmId} handleFilmMouseOver={handleFilmMouseOver} />
        )}
      </div>
      {children}
    </>
  );
};

export default React.memo(FilmCardsList);

