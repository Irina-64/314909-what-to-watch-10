import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../const/enums';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import FilmPlayerProgress from './player-progress';

const {wrapper, mockPlayerState} = testUtils();

describe('Component: FilmPlayerProgress', () => {
  it('should render correctly', () => {
    render(
      <FilmPlayerProgress {...mockPlayerState} />,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.Progress)).toBeInTheDocument();
  });
});
