import { render, screen } from '@testing-library/react';
import { makeFakeMovie } from '../../../../utilites/mocks/mocks';
import FilmTabDetails from './tab-details';

const mockFilm = makeFakeFilm();

describe('Component: FilmTabDetails', () => {
  it('should render correctly', () => {
    render(
      <FilmTabDetails {...mockFilm} />
    );

    expect(screen.getByText(mockMovie.director)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.genre)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.released)).toBeInTheDocument();
  });
});
