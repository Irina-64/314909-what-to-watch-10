import { render, screen } from '@testing-library/react';
import { makeFakeFilm } from '../../../../utilites/mocks/mocks';
import FilmBackground from './film-background';

const mockFilm = makeFakeFilm();

describe('Component: FilmBackground', () => {
  it('should render correctly', () => {
    render(
      <FilmBackground movie={mockFilm}/>
    );

    expect(screen.getByAltText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockFilm.name)).toHaveAttribute('src', mockFilm.backgroundImage);
  });
});
