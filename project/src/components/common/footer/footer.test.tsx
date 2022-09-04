import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../../const/enums';
import { testUtils } from '../../../utilites/mocks/test-utilites';
import FooterElement from './footer';

const {wrapper} = testUtils();

describe('Component: FooterElement', () => {
  it('should render correctly', () => {
    render(
      <FooterElement />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Footer)).toBeInTheDocument();
  });
});
