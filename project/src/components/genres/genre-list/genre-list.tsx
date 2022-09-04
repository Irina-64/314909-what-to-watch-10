import React from 'react';
import { ComponentTestID, Genre } from '../../../const/enums';
import GenreElement from '../genre-item/genre-item';


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
        {currentGenres.map((genre) => <GenreElement key={genre} genre={genre} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick} />)}
      </ul>
    );
  }
  return null;
};

export default React.memo(GenresList);
