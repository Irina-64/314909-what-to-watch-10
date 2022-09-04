import {render, screen} from '@testing-library/react';
import { random } from 'faker';
import { createMemoryHistory } from 'history';
import { MOVIE_TAB_ACTIVE_CLASS } from '../../../../const/const';
import { ElementTestID, FilmNavigation } from '../../../../const/enums';
import HistoryRouter from '../../../history-route/history-route';
import FilmTabNavigation from './tab-control';

const history = createMemoryHistory();

describe('Component: FilmTabNavigation', () => {
  const mockTabName = random.objectElement(FilmNavigation) as FilmNavigation;

  it('should render correctly', () => {
    const mockActiveTabName = random.objectElement(FilmNavigation) as FilmNavigation;

    render(
      <HistoryRouter history={history}>
        <FilmTabNavigation name={mockTabName} activeTab={mockActiveTabName} handleTabEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByText(mockTabName)).toBeInTheDocument();
    expect(screen.getByText(mockTabName)).toHaveAttribute('href', `/${mockTabName.toLowerCase()}`);
  });

  it('should have active class if tab is activeTab', () => {
    render(
      <HistoryRouter history={history}>
        <FilmTabNavigation name={mockTabName} activeTab={mockTabName} handleTabEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByTestId(ElementTestID.FilmTab)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.FilmTab)).toHaveClass(MOVIE_TAB_ACTIVE_CLASS);
  });

  it('should not have active class if tab is activeTab', () => {
    render(
      <HistoryRouter history={history}>
        <FilmTabNavigation name={FilmNavigation.Details} activeTab={FilmNavigation.Overview} handleTabEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByTestId(ElementTestID.FilmTab)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.FilmTab)).not.toHaveClass(MOVIE_TAB_ACTIVE_CLASS);
  });
});
