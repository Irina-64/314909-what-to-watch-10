import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import { humanizeTime } from '../../../../utilites/utilites';
import FilmPlayerTimeValue from './player-time-value';

const {wrapper, mockPlayerState} = testUtils();

const playerState = mockPlayerState;

describe('Component: FilmPlayerTimeValue', () => {
  it('should render correctly', () => {
    const correctTimeValue = humanizeTime(Number(playerState.time.toFixed()));
    render(
      <FilmPlayerTimeValue {...playerState}/>,
      {wrapper}
    );

    expect(screen.getByText(correctTimeValue)).toBeInTheDocument();
  });
});
