import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import {commerce, name, internet, lorem, random, datatype, image} from 'faker';
import { AuthStatus, Genre, NameSpace } from '../../const/enums';
import { currentMovieInitialState, mainPageInitialState, userInitialState } from '../../const/initial-states';
import { createAPI } from '../../services/api/api';
import { TAuthData, TUserInfo } from '../../types/data';
import Film from '../../types/film';
import TReview from '../../types/review';
import { CurrentFilmState, MainPageState, State, TPlayerState, UserState } from '../../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { ALL_GENRES, MOVIE_CARD_SIMILAR_COUNT } from '../../const/const';

export const makeFakeToken = () => datatype.string(16);

export const makeFakeRating = () => datatype.number({min: 1, max: 10});

export const makeFakeName = () => internet.userName(name.firstName(), name.lastName());

export const makeFakeGenre = () => random.objectElement(Genre) as Genre;

export const makeFakeSentences = () => lorem.sentences(datatype.number({min: 1, max: 10}));

export const makeFakeElement = (text = makeFakeSentences()) => <p>{text}</p>;

export const makeFakeComment = () => ({comment: datatype.string(55), rating: makeFakeRating()});

export const makeFakeFilm = (): Film => ({
  name: lorem.sentence(2, 5),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: commerce.color(),
  description: makeFakeSentences(),
  rating: makeFakeRating(),
  scoresCount: datatype.number(),
  director: makeFakeName(),
  starring: new Array(datatype.number(5)).fill(null).map(makeFakeName),
  runTime: datatype.number(240),
  genre: makeFakeGenre(),
  released: datatype.number({min: 1960, max: 2020}),
  id: datatype.number(),
  isFavorite: datatype.boolean(),
  videoLink: internet.url(),
  previewVideoLink: internet.url()
} as Film);

export const makeFakeFilms = (): Film[] => (new Array(datatype.number({min: 20, max: 35})).fill(null).map(makeFakeFilm) as Film[]);

export const makeFakeFilmsShort = (): Film[] => (new Array(4).fill(null).map(makeFakeFilm) as Film[]);

export const makeFakeReview = (): TReview => ({
  id: datatype.number(100),
  user: {
    id: datatype.number(100),
    name: internet.userName()
  },
  rating: makeFakeRating(),
  comment: makeFakeSentences(),
  date: (datatype.datetime()).toString()
} as TReview);

export const makeFakeReviews = (): TReview[] => (new Array(datatype.number(30)).fill(null).map(makeFakeReview) as TReview[]);

export const makeFakeUserInfo = (): TUserInfo => ({
  avatarUrl: image.imageUrl(),
  email: internet.email(),
  id: datatype.number(100),
  name: makeFakeName(),
  token: makeFakeToken()
} as TUserInfo);

export const makeFakeAuthData = (): TAuthData => ({
  login: internet.email(),
  password: 'a1'
} as TAuthData);

export const mockMiddleware = () => {
  const api = createAPI();

  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  return {
    api,
    mockAPI,
    middlewares
  };
};

export const mockStoreDefaultProps = {
  authStatus: AuthStatus.Auth,
  movies: makeFakeFilms(),
  genre: ALL_GENRES,
};

export const createMockStore = (props = mockStoreDefaultProps) => {
  const {movies, authStatus, genre: selectedGenre} = props;

  const {api, middlewares} = mockMiddleware();

  const promo = makeFakeFilm();
  const currentFilm = random.arrayElement(movies);
  const similar = movies.filter((movie) => movie.id !== currentFilm.id && movie.genre === currentFilm.genre).slice(0, MOVIE_CARD_SIMILAR_COUNT);
  const reviews = makeFakeReviews();
  const userInfo = makeFakeUserInfo();
  const favorites = movies.filter((movie) => movie.isFavorite);

  const mockStoreData = {
    [NameSpace.User]: {...userInitialState, userInfo, favorites: {data: favorites, isLoaded: true}, authStatus} as UserState,
    [NameSpace.MainPage]: {...mainPageInitialState, data: {movies, promo}, isLoaded: true, selectedGenre} as MainPageState,
    [NameSpace.CurrentFilm]: {...currentMovieInitialState, data: {movie: currentFilm, similar, reviews}, isLoaded: true} as CurrentFilmState,
  };

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  const store = mockStore(mockStoreData);

  return {
    store,
    mockStoreData
  };
};

export const makeFakePlayerState = (): TPlayerState => ({
  progress: datatype.number(),
  time: datatype.number(),
  isPlaying: datatype.boolean(),
  isMuted: datatype.boolean(),
} as TPlayerState);

export const getMockFilmId = (movies: Film[]) => {
  const randomFilm = movies[datatype.number(movies.length - 1)];

  return randomFilm.id;
};
