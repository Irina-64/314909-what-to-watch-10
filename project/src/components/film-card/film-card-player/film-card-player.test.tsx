import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../const/enums';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import FilmCardPlayer from './film-card-player';

const {wrapper, mockCurrentFilm, mockVideoAPI} = testUtils();

describe('Component: FilmCardPlayer', () => {
  beforeAll(mockVideoAPI);

  it('should render correctly', () => {
    render(
      <FilmCardPlayer movie={mockCurrentFilm} isPlaying isPreview/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();
  });
});
