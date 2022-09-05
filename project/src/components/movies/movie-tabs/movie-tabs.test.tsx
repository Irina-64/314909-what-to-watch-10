import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import FilmTabs from './movie-tabs';

const {mockCurrentFilm, mockReviews, wrapper} = testUtils();

describe('Component: FilmTabs', () => {
  it('should render correctly', () => {
    render(
      <FilmTabs movie={mockCurrentFilm} reviews={mockReviews} />,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentFilm.description)).toBeInTheDocument();
  });
});
