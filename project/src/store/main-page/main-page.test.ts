import { UNKNOWN_ACTION } from '../../const/const';
import { mainPageInitialState } from '../../const/initial-states';
import { testUtils } from '../../utilites/mocks/test-utilites';
import { mainPage } from './main-page';
import { setGenre } from './main-page-actions';
import { fetchMainPageDataAction } from './main-page-api-actions';

const {mockFilms, mockPromo, mockSelectedGenre} = testUtils();

const mockMainPageData = {
  movies: mockFilms,
  promo: mockPromo
};

describe('Reducer: mainPage', () => {
  const state = mainPageInitialState;

  it('without additional parameters should return initial state', () => {
    expect(mainPage.reducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(mainPageInitialState);
  });

  describe('fetchMainPageData test', () => {
    it('should set isLoaded to false if fetchMainPageData is pending', () => {
      expect(mainPage.reducer(state, { type: fetchMainPageDataAction.pending.type }))
        .toEqual({...state, isLoaded: false});
    });

    it('should load movies and promo and set isLoaded to true if fetchMainPageData was fulfilled', () => {
      expect(mainPage.reducer(state, { type: fetchMainPageDataAction.fulfilled.type, payload: mockMainPageData }))
        .toEqual({...state, data: mockMainPageData, isLoaded: true});
    });
  });

  describe('setGenre test', () => {
    it('should set selectedGenre', () => {
      expect(mainPage.reducer(state, { type: setGenre.type, payload: mockSelectedGenre }))
        .toEqual({...state, selectedGenre: mockSelectedGenre});
    });
  });
});
