import {render, screen} from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import { getCurrentGenres } from '../../../utilites/utilites';
import GenresList from './genre-list';

const {wrapper, mockFilms} = testUtils();

describe('Component: GenresList', () => {
  it('should render correctly', async () => {
    const mockCurrentGenres = getCurrentGenres(mockFilms);
    render(
      <GenresList currentGenres={mockCurrentGenres} handleGenreChange={jest.fn()}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.GenresList)).toBeInTheDocument();
  });
});
