import { useCallback, useState } from 'react';
import Film from '../../types/film';
import ShowMoreButton from '../show-more/show-more';
import FilmCardComponent from '../film-card/film-card';
import { MOVIE_CARD_MAIN_COUNT, MOVIE_CARD_SIMILAR_COUNT } from '../../const/const';

const FilmCardsList = ({ movies, isLong = false }: { movies: Film[], isLong?: boolean }) => {
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);
  const [renderedMovieCount, setRenderedMovieCount] = useState(isLong ? MOVIE_CARD_MAIN_COUNT : MOVIE_CARD_SIMILAR_COUNT);

  const handleShowMoreButtonClick = useCallback(
    (count: number) => setRenderedMovieCount(() => Math.min(renderedMovieCount + count, movies.length)),
    [movies.length, renderedMovieCount],
  );

  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );

  return (
    <>
      <div className="catalog__films-list">
        {movies.slice(0, renderedMovieCount).map(
          (movie: Film) => <FilmCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent} />
        )}
      </div>
      {!isLong || movies.length <= renderedMovieCount
        ? null
        : <ShowMoreButton totalFilmCount={movies.length} renderedFilmsCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );
};

export default FilmCardsList;
