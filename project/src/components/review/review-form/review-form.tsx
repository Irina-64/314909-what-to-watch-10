import { ChangeEvent, useState } from 'react';
import { Rating } from '../../../const/const';
import RatingElement from '../rating-element/rating-element';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import { addReviewAction } from '../../../store/review/review-api-actions';
import Film from '../../../types/film';
import { TReviewState } from '../../../types/review-state';

const ReviewForm = ({ movie }: { movie: Film }) => {
  const [review, setReview] = useState<TReviewState>({ rating: 0, comment: null });
  const { rating, comment } = review;
  const dispatch = useAppDispatch();

  const handleReviewChange = ({ target, value }: { target: string, value: string | number }) => setReview({ ...review, [target]: value });

  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (movie) {
      dispatch(addReviewAction(({
        rating: rating,
        comment: comment,
        id: Number(movie.id),
      })));
    }
  };

  const onCommentChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => handleReviewChange({ target: target.name, value: target.value });

  return (
    <div className="add-review" >
      <form action="" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Rating.map((value) => <RatingElement key={value} rating={value} handleReviewChange={handleReviewChange} />)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChangeCapture={onCommentChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={onSubmitClick}>Post</button>
          </div>x
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
