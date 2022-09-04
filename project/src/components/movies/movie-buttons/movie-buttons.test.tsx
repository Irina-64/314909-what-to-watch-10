import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import FilmButtons from './movie-buttons';

const {wrapper, mockCurrentMovie} = testUtils();

describe('Component: FilmButtons', () => {
  it('should render correctly', () => {
    render(
      <FilmButtons id={mockCurrentFilm.id}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.FilmButtons)).toBeInTheDocument();
  });
});
