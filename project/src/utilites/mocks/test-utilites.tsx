import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { createMemoryHistory } from 'history';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-route/history-route';
import { Genre, NameSpace } from '../../const/enums';
import { createAPI } from '../../services/api/api';
import { TUserInfo } from '../../types/data';
import Film from '../../types/film';
import TReview from '../../types/review';
import { State } from '../../types/state';
import { getCurrentGenres } from '../utilites';
import { createMockStore, makeFakeAuthData, makeFakeComment, makeFakeElement, makeFakePlayerState, makeFakeSentences, makeFakeToken, mockMiddleware, mockStoreDefaultProps } from './mocks';

export const APITestUtils = () => {
  const api = createAPI();

  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  return {
    mockAPI,
    mockStore
  };
};

export const testUtils = (storeProps = mockStoreDefaultProps) => {
  const mockStore = createMockStore(storeProps).store;
  const mockStoreData = createMockStore(storeProps).mockStoreData;
  const mockHistory = createMemoryHistory();

  const mockUserReducer = mockStore.getState()[NameSpace.User];
  const mockCurrentFilmReducer = mockStore.getState()[NameSpace.CurrentFilm];
  const mockMainPageReducer = mockStore.getState()[NameSpace.MainPage];

  const mockUserInfo = mockUserReducer?.userInfo as TUserInfo;
  const mockFavorites = mockUserReducer?.favorites?.data as Film[];

  const mockCurrentFilm = mockCurrentFilmReducer?.data?.movie as Film;
  const mockSimilarFilms = mockCurrentFilmReducer?.data?.similar as Film[];
  const mockReviews = mockCurrentFilmReducer?.data?.reviews as TReview[];

  const mockFilms = mockMainPageReducer?.data?.movies as Film[];
  const mockPromo = mockMainPageReducer?.data?.promo as Film;
  const mockSelectedGenre = mockMainPageReducer?.selectedGenre as Genre;

  const mockCurrentGenres = getCurrentGenres(mockFilms);

  const mockPlayerState = makeFakePlayerState();

  const mockElementText = makeFakeSentences();
  const mockElement = makeFakeElement(mockElementText);

  const mockReview = makeFakeComment();

  const mockAuthData = makeFakeAuthData();
  const mockToken = makeFakeToken();

  const {mockAPI} = mockMiddleware();

  const mockVideoAPI = () => {
    window.HTMLVideoElement.prototype.play = () => Promise.resolve();
    window.HTMLVideoElement.prototype.pause = jest.fn();
  };

  const wrapper = ({children}: PropsWithChildren) => (
    <Provider store={mockStore}>
      <HistoryRouter history={mockHistory}>
        {children}
      </HistoryRouter>
    </Provider>
  );

  return {
    mockStore,
    mockStoreData,
    mockHistory,
    mockUserInfo,
    mockFavorites,
    mockCurrentFilm,
    mockSimilarFilms,
    mockReviews,
    mockReview,
    mockFilms,
    mockPromo,
    mockCurrentGenres,
    mockSelectedGenre,
    mockPlayerState,
    mockElement,
    mockElementText,
    mockAuthData,
    mockToken,
    mockAPI,
    mockVideoAPI,
    wrapper
  };
};
