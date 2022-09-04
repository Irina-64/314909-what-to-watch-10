import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../const/const';
import { AppRoute, ComponentTestID, ElementTestID, PageTestID } from '../../../const/enums';
import MoviePage from '../../../pages/movie-page/movie-page';
import { makeFakeFilm } from '../../../utilites/mocks/mocks';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import FilmCardComponent from './film-card';

const {wrapper, mockCurrentMovie, mockHistory, mockVideoAPI} = testUtils();

const mockActiveFilm = makeFakeFilm();

const mockHandleMouseEvent = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

beforeAll(mockVideoAPI);

describe('Component: FilmCardComponent', () => {
  it('should render correctly', async () => {
    render(
      <FilmCardComponent movie={mockCurrentFilm} activeMovieId={mockActiveFilm.id} handleMovieMouseOver={mockHandleMouseEvent}/>,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentFilm.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCurrentFilm.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCurrentFilm.name)).toHaveAttribute('src', mockCurrentFilm.previewImage);
  });

  it('should redirect to /movies/:id when user clicks on movie name', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={`${AppRoute.Films}${mockCurrentFilm.id}`}
          element={<MoviePage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<FilmCardComponent movie={mockCurrentFilm} activeMovieId={mockActiveFilm.id} handleMovieMouseOver={mockHandleMouseEvent}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MoviePage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(ElementTestID.FilmCardLink));

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });

  it('should play movie preview when mouseOver and stop when mouseLeave', async () => {
    const {rerender} = render(
      <FilmCardComponent movie={mockCurrentFilm} activeMovieId={null} handleMovieMouseOver={mockHandleMouseEvent}/>,
      {wrapper}
    );

    expect(screen.queryByTestId(ElementTestID.Video)).not.toBeInTheDocument();

    rerender(
      <FilmCardComponent movie={mockCurrentFilm} activeMovieId={mockCurrentFilm.id} handleMovieMouseOver={mockHandleMouseEvent}/>
    );

    fireEvent.mouseEnter(screen.getByTestId(ComponentTestID.FilmCard));

    fireEvent(screen.getByTestId(ElementTestID.Video) as Element,
      new Event('loadeddata'));

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByTestId(ComponentTestID.FilmCard));

    rerender(
      <FilmCardComponent movie={mockCurrentMovie} activeMovieId={null} handleMovieMouseOver={mockHandleMouseEvent}/>
    );

    expect(screen.queryByTestId(ElementTestID.Video)).not.toBeInTheDocument();

    expect(mockHandleMouseEvent).toBeCalledTimes(2);
  });
});
