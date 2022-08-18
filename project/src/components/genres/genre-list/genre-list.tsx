import { useCallback, useEffect } from 'react';
import { Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { setGenre } from '../../../store/main-page/main-page-actions';
import { getMovies, getSelectedGenre } from '../../../utilites/selectors/selectors';
import GenreItem from '../genre-item/genre-item';

const GenreList = () => {
  const movies = useAppSelector(getMovies).data;
  const selectedGenre = useAppSelector(getSelectedGenre);
  const dispatch = useAppDispatch();

  const currentGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre as Genre))];

  const handleGenreClick = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setGenre(Genre.AllGenres));
  }, [dispatch]);

  if (movies) {
    return (
      <ul className="catalog__genres-list">
        {currentGenres.map((genre) => <GenreItem key={genre} genre={genre} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick} />)}
      </ul>
    );
  }
  return null;
};

export default GenreList;
