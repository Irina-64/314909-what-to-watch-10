import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import FilmTabOverview from './tab-overview';

const {mockCurrentFilm, wrapper} = testUtils();

describe('Component: FilmTabOverview', () => {
  it('should render correctly', () => {
    render(
      <FilmTabOverview {...mockCurrentFilm} />,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentFilm.rating)).toBeInTheDocument();
    expect(screen.getByText(mockCurrentFilm.description)).toBeInTheDocument();
  });
});
