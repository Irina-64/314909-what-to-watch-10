import {render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, ComponentTestID, PageTestID } from '../../const/enums';
import { testUtils } from '../../utilites/mocks/test-utilites';
import NotFound from '../not-found/not-found';
import AddReview from './add-review';

const {mockCurrentFilm, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentFilm.id,
  }),
}));

describe('Component: AddReviewPage', () => {
  it('should render correctly', async () => {
    render(
      <AddReview />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.AddReviewForm)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.AddReviewHeader)).toBeInTheDocument();
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
          path={AppRoute.NotFound}
          element={<NotFound />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.getByTestId(PageTestID.NotFound)).toBeInTheDocument();
  });
});
