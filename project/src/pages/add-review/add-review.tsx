import { Navigate, useParams } from 'react-router-dom';
import ReviewFormComponent from '../../components/review/review-form/review-form';
import LogoElement from '../../components/common/logo/logo';
import UserBlock from '../../components/common/user-block/user-block';
import { AppRoute, PosterSize } from '../../const/enums';
import FilmCardBackground from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import ReviewBreadcrumbsElm from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw/wtw';
import HeaderElement from '../../components/common/header-element/header-element';
import { findMovieById } from '../../utilites/utilites';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovies } from '../../utilites/selectors/selectors';

const AddReview = () => {
  const { id } = useParams();
  const allMovies = useAppSelector(getMovies);
  const currentMovie = findMovieById(allMovies, id);

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
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
