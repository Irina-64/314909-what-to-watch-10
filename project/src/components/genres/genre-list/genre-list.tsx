import React, { useCallback, useEffect } from 'react';
import { Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { setGenre } from '../../../store/main-page/main-page-actions';
import { getMainPageState } from '../../../store/main-page/main-page-selectors';
import GenreItem from '../genre-item/genre-item';


const GenresList = () => {
  const { data: { movies }, selectedGenre } = useAppSelector(getMainPageState);
  const dispatch = useAppDispatch();

  const currentGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre))];

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

export default React.memo(GenresList);
