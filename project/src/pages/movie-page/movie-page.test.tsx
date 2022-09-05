import {render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, ComponentTestID, PageTestID } from '../../const/enums';
import { testUtils } from '../../utilites/mocks/test-utiltites';
import NotFoundPage from '../not-found-page/not-found-page';
import MoviePage from './movie-page';

const {mockCurrentFilm, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentFilm.id,
  }),
}));

describe('Component: MoviePage', () => {
  it('should render correctly', async () => {
    render(
      <MoviePage />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.FilmPageCard)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.SimilarFilms)).toBeInTheDocument();
  });

  it('should redirect to NotFoundPage when id is not correct', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        id: mockCurrentFilm.genre,
      }),
    }));

    render(
      <Routes>
        <Route
          path={AppRoute.Films}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.getByTestId(PageTestID.NotFoundPage)).toBeInTheDocument();
  });
});

