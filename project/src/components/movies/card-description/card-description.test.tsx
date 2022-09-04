import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../../utilites/mocks/mocks';
import FilmCardDescription from './card-description';

const mockFilm = makeFakeFilm();

describe('Component: FilmCardDescription', () => {
  it('should render correctly', () => {
    render(
      <FilmCardDescription movie={mockFilm}/>
    );

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.released)).toBeInTheDocument();
  });
});
