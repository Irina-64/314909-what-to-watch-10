import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import FilmCardPromo from './promo';

const {mockPromo, wrapper} = testUtils();

const mockNoPromo = null;

describe('Component: FilmCardPromo', () => {
  it('should render if promo exists', () => {
    render(
      <FilmCardPromo promo={mockPromo}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.PromoCard)).toBeInTheDocument();
  });

  it('should not render if no promo', () => {
    render(
      <FilmCardPromo promo={mockNoPromo}/>,
      {wrapper}
    );

    expect(screen.queryByTestId(ComponentTestID.PromoCard)).not.toBeInTheDocument();
  });
});
