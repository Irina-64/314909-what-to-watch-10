import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import FilmCardsList from './film-list';

const {wrapper, mockFilms} = testUtils();

describe('Component: FilmCardsList', () => {
  it('should render correctly', () => {
    render(
      <FilmCardsList movies={mockFilms} testId={ComponentTestID.MainMovies} />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.MainMovies)).toBeInTheDocument();
  });
});
