import {render, screen} from '@testing-library/react';
import { ComponentText } from '../../const/enums';
import LoadingPage from './loading';

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    render(
      <Loading />
    );

    expect(screen.getByText(ComponentText.Loading)).toBeInTheDocument();
  });
});
