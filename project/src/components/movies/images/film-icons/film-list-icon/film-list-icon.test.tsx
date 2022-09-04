import { render, screen } from '@testing-library/react';
import { ComponentText, ElementTestID } from '../../../../../const/enums';
import FilmAddIcon from './film-list-icon';
import FilmAddedIcon from './film-list-icon';

describe('Component: FilmAddIcon', () => {
  it('should render correctly', () => {
    render(
      <FilmAddIcon />
    );

    expect(screen.getByText(ComponentText.Add)).toBeInTheDocument();
  });
});

describe('Component: FilmAddedIcon', () => {
  it('should render correctly', () => {
    render(
      <FilmAddedIcon />
    );

    expect(screen.getByTestId(ElementTestID.IconAdded)).toBeInTheDocument();
  });
});
