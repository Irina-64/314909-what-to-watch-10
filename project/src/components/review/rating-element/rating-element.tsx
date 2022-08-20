import React from 'react';
import { RATING_ID_PREFIX } from '../../../const/const';
import { ReviewProps } from '../../../types/props';

//type RatingElementProps = Pick<ReviewProps, 'handleReviewChange'> & { rating: string };

const RatingElement = ({ rating, handleReviewChange }: Pick<ReviewProps, 'handleReviewChange'> & { rating: string }) => {
  const onRatingChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => handleReviewChange({ target: target.name, value: rating });
  return (
    <>
      <input className="rating__input" id={`${RATING_ID_PREFIX}${rating}`} type="radio" name="rating" value={rating} onChangeCapture={onRatingChange} />
      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
    </>
  );
};

export default RatingElement;
