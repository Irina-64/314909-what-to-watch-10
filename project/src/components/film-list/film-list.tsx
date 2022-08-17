import { useCallback, useState } from 'react';
import { Genre } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import Film from '../../types/film';
import { getSelectedGenre } from '../../utilites/selectors/selectors';
import ShowMoreButton from '../show-more/show-more';
import FilmCardComponent from '../film-card/film-card';

const FilmCardsList = ({ movies, countPerStep, isMain = false }: { movies: Film[], countPerStep: number, isMain?: boolean }) => {
  const selectedGenre = useAppSelector(getSelectedGenre);
  const filteredMovies = selectedGenre === Genre.AllGenres ? movies : movies.filter((movie: Film) => movie.genre === selectedGenre);
  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);
  const [renderedMovieCount, setRenderedMovieCount] = useState(countPerStep);

  const handleMouseEvent = useCallback(
    (id: number | null) => id === activeMovieId ? null : setActiveMovieId(id),
    [activeMovieId],
  );

  const handleShowMoreButtonClick = useCallback(
    (movieCount: number) => setRenderedMovieCount(() => Math.min(renderedMovieCount + movieCount, filteredMovies.length)),
    [filteredMovies.length, renderedMovieCount],
  );

  return (
    <>
      <div className="catalog__films-list">
        {filteredMovies.slice(0, renderedMovieCount).map(
          (movie: Film) => <FilmCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMouseEvent} />
        )}
      </div>
      {(filteredMovies.length <= renderedMovieCount) || !isMain
        ? null
        : <ShowMoreButton totalFilmCount={filteredMovies.length} renderedFilmsCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );
};

export default FilmCardsList;
