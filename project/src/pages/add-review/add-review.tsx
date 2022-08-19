import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import LogoElement from '../../components/common/logo/logo';
import UserBlock from '../../components/common/user-block/user-block';
import { AppRoute, PosterSize } from '../../const/enums';
import FilmCardBackground from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import ReviewBreadcrumbsElm from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw/wtw';
import HeaderElement from '../../components/common/header-element/header-element';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getCurrentMovie } from '../../utilites/selectors/selectors';
import { checkFilm } from '../../utilites/utilites';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import Loading from '../loading/loading';
import { fetchCurrentMovieAction } from '../../store/movie-page/movie-page-api-actions';
import ReviewFormComponent from '../../components/review/review-form/review-form';

const AddReview = () => {
  const { id } = useParams();
  const currentMovie = useAppSelector(getCurrentMovie).data;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currentMovie && id && checkFilm(currentMovie, id)) {
      dispatch(fetchCurrentMovieAction(id));
    }
  }, [currentMovie, dispatch, id]
  );

  if (!id) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (!currentMovie) {
    return <Loading />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBackground movie={currentMovie} />
        <WTWElement />
        <HeaderElement>
          <LogoElement />
          <ReviewBreadcrumbsElm {...currentMovie} />
          <UserBlock />
        </HeaderElement>
        <FilmPosterElement {...currentMovie} size={PosterSize.Small} />
      </div>
      <ReviewFormComponent />
    </section>
  );
};

export default AddReview;
