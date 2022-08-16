import { ChangeEvent, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ReviewFormComponent from '../../components/review/review-form/review-form';
import LogoElement from '../../components/common/logo/logo';
import UserBlockElement from '../../components/common/user-block/user-block';
import { AppRoute, PosterSize } from '../../const/enums';
import mockFilmList from '../../mocks/films';
import FilmBackgroundElement from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import ReviewBreadcrumbsElm from '../../components/review/review-breadcrumbs/review-breadcrumbs';
import WTWElement from '../../components/common/wtw/wtw';

type ReviewState = {
  rating: string;
  reviewText: string;
}
const AddReview = () => {
  const [review, setReview] = useState<ReviewState>({ rating: '', reviewText: '' });
  const { id } = useParams();

  const currentMovie = mockFilmList.find((film) => film.id === id);

  const handleReviewChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setReview({ ...review, [e.target.name]: e.target.value });

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmBackgroundElement movie={currentMovie} />
        <WTWElement />
        <header className="page-header">
          <LogoElement />
          <ReviewBreadcrumbsElm {...currentMovie} />
          <UserBlockElement />
        </header>
        <FilmPosterElement {...currentMovie} size={PosterSize.Small} />
      </div>
      <ReviewFormComponent handleReviewChange={handleReviewChange} />
    </section>
  );
};

export default AddReview;
