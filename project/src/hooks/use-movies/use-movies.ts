import { useCallback, useState } from 'react';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { Genre } from '../../const/enums';
import { getMainPageState } from '../../store/main-page/main-page-selectors';
import { filterFilmsByGenre, getCurrentGenres, getFilmsToLoadCount } from '../../utilites/utilites';
import useAppSelector from '../use-app-selector/use-app-selector';
import { setGenre } from '../../store/main-page/main-page-actions';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';

const useFilms = () => {
  const [renderedFilmCount, setRenderedFilmCount] = useState(MOVIE_CARD_MAIN_COUNT);

  const {data: {movies: allFilms, promo}, selectedGenre} = useAppSelector(getMainPageState);

  const filteredFilms = filterFilmsByGenre(allFilms, selectedGenre);
  const currentGenres = getCurrentGenres(allFilms);

  const movies = filteredFilms.slice(0, renderedFilmCount);
  const moviesToLoadCount = getFilmsToLoadCount(filteredFilms, renderedFilmCount);

  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = useCallback(
    (count: number) => {
      setRenderedFilmCount(() => Math.min(renderedFilmCount + count, allFilms.length));
    }, [allMovies, renderedFilmCount],
  );

  const handleGenreChange = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));
      setRenderedFilmCount(MOVIE_CARD_MAIN_COUNT);
    }, [dispatch]
  );

  return {
    movies,
    promo,
    moviesToLoadCount,
    currentGenres,
    renderedFilmCount,
    handleGenreChange,
    handleShowMoreButtonClick
  };
};

export default useFilms;
