import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOVIE_CARD_MAIN_COUNT, MOVIE_CARD_SIMILAR_COUNT } from '../../../const/const';
import { MovieList } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useMovies from '../../../hooks/use-movies/use-movies';
import { fetchSimilarMoviesAction } from '../../../store/similar-movies/similar-movies-api-actions';
import { fetchFavoritesAction } from '../../../store/user/user-api-actions';
import Film from '../../../types/film';
import ShowMoreButton from '../../show-more/show-more';
import FilmCardComponent from '../../film-card/film-card';

const FilmCardsList = ({ movieList, isLong = false }: { movieList: MovieList, isLong?: boolean }) => {
  const id = Number(useParams().id);

  const [activeMovieId, setActiveMovieId] = useState<null | number>(null);
  const [renderedMovieCount, setRenderedMovieCount] = useState(isLong ? MOVIE_CARD_MAIN_COUNT : MOVIE_CARD_SIMILAR_COUNT);

  const movies = useMovies(movieList);

  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = useCallback(
    (count: number) => {
      setRenderedMovieCount(() => Math.min(renderedMovieCount + count, movies.length));
    },
    [movies, renderedMovieCount],
  );

  const handleMovieMouseOver = useCallback(
    (movieId: number | null) => movieId === activeMovieId ? null : setActiveMovieId(movieId),
    [activeMovieId],
  );

  useEffect(() => {
    if (!movies) {
      switch (true) {
        case movieList === MovieList.MoviePage && id:
          dispatch(fetchSimilarMoviesAction(id));
          break;
        case movieList === MovieList.MyListPage:
          dispatch(fetchFavoritesAction());
          break;
      }
    }
  }, [dispatch, id, movieList, movies]);


  return (
    <>
      <div className="catalog__films-list">
        {movies.slice(0, renderedMovieCount).map(
          (movie: Film) => <FilmCardComponent key={`${movie.id}-${movie.name}`} movie={movie} activeMovieId={activeMovieId} handleMouseEvent={handleMovieMouseOver} />
        )}
      </div>
      {!isLong || movies.length <= renderedMovieCount
        ? null
        : <ShowMoreButton totalFilmCount={movies.length} renderedFilmsCount={renderedMovieCount} handleShowMoreButtonClick={handleShowMoreButtonClick} />}
    </>
  );
};

export default React.memo(FilmCardsList);
