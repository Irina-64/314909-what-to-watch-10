import { render, screen } from '@testing-library/react';
import { random } from 'faker';
import { ComponentText } from '../../../../const/enums';
import TReview from '../../../../types/review';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import FilmTabReviews from './tab-reviews';

const {mockReviews, wrapper} = testUtils();

const mockNoReviews = [] as TReview[];

const randomReviewText = random.arrayElement(mockReviews).comment;

describe('Component: FilmTabReviews', () => {

  it('should render reviews if any', () => {
    render(
      <FilmTabReviews reviews={mockReviews}/>,
      {wrapper}
    );

    expect(screen.getByText(randomReviewText)).toBeInTheDocument();
  });

  it('should render no reviews if there are none', () => {
    render(
      <FilmTabReviews reviews={mockNoReviews}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.NoReviews)).toBeInTheDocument();
  });
});
