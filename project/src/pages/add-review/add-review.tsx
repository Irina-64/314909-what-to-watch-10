import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, RatingValues, RATING_ID_PREFIX } from '../../const/const';
import LogoElement from '../../components/common/logo/logo';
import HeaderElement from '../../components/common/header/header-element';
import UserBlock from '../../components/common/user-block/user-block';
import WTWElement from '../../components/common/wtw/wtw';
import { ComponentTestID, ComponentText, ElementTestID, FormParam, PageTestID, PosterSize } from '../../const/enums';
import FilmBackground from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import ReviewBreadcrumbs from '../../components/review-breadcrumbs/review-breadcrumbs';
import useCurrentFilm from '../../hooks/use-current-movie/use-current-movie';
import Loading from '../loading/loading';
import { useForm } from 'react-hook-form';
import { TAddReviewData } from '../../types/data';
import { addReviewAction } from '../../store/current-movie/current-movie-api-actions';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';

const AddReview = () => {
  const {movie, isLoading} = useCurrentFilm();
    const {
      register,
      handleSubmit,
      formState: {
        isValid,
        isSubmitting
      }
    } = useForm<TAddReviewData>({mode: FormParam.ValidateMode, reValidateMode: FormParam.ValidateMode});
  
  const id = Number(useParams().id);

  const dispatch = useAppDispatch();

   const onAddReviewSubmit = handleSubmit(async (data: TAddReviewData) => dispatch(addReviewAction({...data, id})));

  return !movie || isLoading
    ? <Loading />
    : (
    <section className="film-card film-card--full" data-testid={PageTestID.AddReview}>
        <div className="film-card__header" data-testid={ComponentTestID.AddReviewHeader}>
          <FilmBackground movie={movie} />
          <WTWElement />
          <HeaderElement>
            <LogoElement />
            <ReviewBreadcrumbs {...movie} />
            <UserBlock />
          </HeaderElement>
          <FilmPoster {...movie} size={PosterSize.Small} />
        </div>
        <div className="add-review" data-testid={ComponentTestID.AddReviewForm}>
          <form action="" className="add-review__form" onSubmit={onAddReviewSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {RatingValues.map((rating) => (
                  <Fragment key={rating}>
                    <input
                      {...register('rating', {required: true})}
                      className="rating__input"
                      id={`${RATING_ID_PREFIX}${rating}`}
                      type="radio"
                      name='rating'
                      value={rating}
                      disabled={isSubmitting}
                    />
                    <label className="rating__label" htmlFor={`${RATING_ID_PREFIX}${rating}`}>{ComponentText.Rating} {rating}</label>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="add-review__text">
              <textarea
                {...register('comment', {required: true, minLength: MIN_COMMENT_LENGTH, maxLength: MAX_COMMENT_LENGTH})}
                className="add-review__textarea"
                name='comment'
                id="comment"
                placeholder={ComponentText.ReviewPlaceholder}
                data-testid={ElementTestID.ReviewTextArea}
                disabled={isSubmitting}
              >
              </textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={!isValid || isSubmitting}>{ComponentText.Post}</button>
              </div>
            </div>
          </form>
        </div>
      </section>
  );
};

export default AddReview;
