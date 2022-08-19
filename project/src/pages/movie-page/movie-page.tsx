import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const/enums';
import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovieState } from '../../utilites/selectors/selectors';
import { checkFilm } from '../../utilites/utilites';
import Loading from '../loading/loading';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchCurrentMovieAction, fetchSimilarMoviesAction } from '../../store/movie-page/movie-page-api-actions';
import MoviePageFilmCard from '../../components/movies/movie-page-film-card/movie-page-film-card';

const MoviePage = () => {
  const { id } = useParams();
  const { currentMovie, similarMovies } = useAppSelector(getMovieState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && checkFilm(currentMovie.data, id)) {
      dispatch(fetchCurrentMovieAction(id));
      dispatch(fetchSimilarMoviesAction(id));
    }
  }, [currentMovie, dispatch, id, similarMovies]
  );

  if (!id) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if ((!similarMovies.data || !currentMovie.data)) {
    return (<Loading />);
  }

  return (
    <>
      <MoviePageFilmCard {...currentMovie.data} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCardsList movies={similarMovies.data} />
        </section>

        <FooterElement />
      </div >
    </>
  );
};

export default MoviePage;
