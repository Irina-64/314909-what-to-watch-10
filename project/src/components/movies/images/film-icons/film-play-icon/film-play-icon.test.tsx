import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../../const/enums';
import FilmPlayIcon from './film-play-icon';

describe('Component: FilmPlayIcon', () => {
  it('should render correctly', () => {
    render(
      <FilmPlayIcon />
    );

    expect(screen.getByTestId(ElementTestID.IconPlay)).toBeInTheDocument();
  });
});
