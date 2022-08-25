import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LogoElement from '../../components/common/logo/logo';
import UserBlock from '../../components/common/user-block/user-block';
import { AppRoute, PosterSize } from '../../const/enums';
import FilmCardBackground from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import ReviewBreadcrumbsElm from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw/wtw';
import HeaderElement from '../../components/common/header/header-element';
import ReviewFormComponent from '../../components/review/review-form/review-form';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { checkFilmId } from '../../utilites/utilites';
import Loading from '../loading/loading';
import { fetchSimilarMoviesAction } from '../../store/similar-movies/similar-movies-api-actions';
import { getMovieState } from '../../store/movie/movie-selectors';
import { getMovies } from '../../store/main-page/main-page-selectors';

const AddReview = () => {
  const id = Number(useParams().id);
  const { data: { movie }, isLoading } = useAppSelector(getMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkFilmId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || id !== movie.id) {
      dispatch(fetchSimilarMoviesAction(id));
    }
  }, [dispatch, id, movie]
  );

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (!movie || isLoading) {
    return <Loading />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBackground movie={movie} />
        <WTWElement />
        <HeaderElement>
          <LogoElement />
          <ReviewBreadcrumbsElm {...movie} />
          <UserBlock />
        </HeaderElement>
        <FilmPosterElement {...movie} size={PosterSize.Small} />
      </div>
      <ReviewFormComponent movie={movie} />
    </section>
  );
};

export default AddReview;
