import { render, screen } from '@testing-library/react';
import { ComponentText } from '../../../../const/enums';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import FilmPlayerToggler from './player-toggler';

const {wrapper, mockPlayerState} = testUtils();

const playerState = mockPlayerState;

describe('Component: FilmPlayerToggler', () => {
  it('should render correctly', () => {
    render(
      <FilmPlayerToggler {...playerState}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Toggler)).toBeInTheDocument();
  });
});
