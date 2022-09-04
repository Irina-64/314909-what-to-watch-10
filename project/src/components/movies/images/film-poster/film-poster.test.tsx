import { render, screen } from '@testing-library/react';
import { random } from 'faker';
import { MOVIE_POSTER_SIZE_CLASS_PREFIX } from '../../../../const/const';
import { ElementTestID, PosterSize } from '../../../../const/enums';
import { makeFakeFilm } from '../../../../utilites/mocks/mocks';
import FilmPoster from './film-poster';

const mockFilm = makeFakeFilm();

describe('Component: FilmPoster', () => {
  it('should render correctly', () => {
    const POSTER_ALT_TEXT = `${mockFilm.name} poster`;
    render(
      <FilmPoster {... mockFilm}/>
    );

    expect(screen.getByTestId(ElementTestID.Poster)).toBeInTheDocument();
    expect(screen.getByAltText(POSTER_ALT_TEXT)).toBeInTheDocument();
    expect(screen.getByAltText(POSTER_ALT_TEXT)).toHaveAttribute('src', mockFilm.posterImage);
  });

  it('should have appropriate size class if specified', () => {
    const mockSize = random.objectElement(PosterSize) as PosterSize;

    render(
      <FilmPoster {...mockMovie} size={mockSize}/>
    );

    expect(screen.getByTestId(ElementTestID.Poster)).toHaveClass(`${MOVIE_POSTER_SIZE_CLASS_PREFIX}${mockSize}`);
  });
});
