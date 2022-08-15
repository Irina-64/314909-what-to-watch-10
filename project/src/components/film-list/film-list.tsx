import { useCallback, useState } from 'react';
import Film from '../../types/film';
import FilmCard from '../film-card/film-card';

const FilmCardsList = ({movies, count}: {movies: readonly Film[], count: number}) => {
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);

  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );

  return (
    <div className="catalog__films-list">
      {movies.slice(0, count).map(
        (movie: Film) => <FilmCard key={`${movie.id}`} value={movie} handleMouseOver={handleMouseOver} />
      )}
    </div>
  );
};

export default FilmCardsList;
