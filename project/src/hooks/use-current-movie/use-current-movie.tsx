import { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MOVIE_CARD_SIMILAR_COUNT } from '../../const/const';
import { AppRoute } from '../../const/enums';
import { fetchCurrentFilmDataAction } from '../../store/current-movie/current-movie-api-actions';
import { getCurrentFilm, getReviews, getSimilarFilms } from '../../store/current-movie/current-movie-selectors';
import { getFilms } from '../../store/main-page/main-page-selectors';
import { checkFilmId } from '../../utilites/utilites';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useCurrentFilm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const id = Number(useParams().id);

  const movie = useAppSelector(getCurrentFilm);
  const movies = useAppSelector(getFilms);

  const reviews = useAppSelector(getReviews);
  const similar = useAppSelector(getSimilarFilms)
    .filter((similarFilm) => similarFilm.id !== id)
    .slice(0, MOVIE_CARD_SIMILAR_COUNT);

  const isIdCorrect = checkId(movies, id);
  const isMovieCorrect = movie && movie.id === id;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      switch (true) {
        case !isIdCorrect:
          navigate(AppRoute.NotFound);
          break;
        case (!isMovieCorrect && !isLoading):
          setIsLoading(true);
          dispatch(fetchCurrentFilmDataAction(id));
          break;
        case (isMovieCorrect):
          setIsLoading(false);
          break;
      }
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, id, isIdCorrect, isLoading, isMovieCorrect, navigate]);

  return {
    movie,
    reviews,
    similar,
    isLoading
  };
};

export default useCurrentFilm;
