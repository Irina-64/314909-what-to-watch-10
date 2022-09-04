import { testUtils } from '../../utilites/mocks/test-utilites';
import { getIsMainDataLoaded, getMainPageState, getFilms, getPromo, getSelectedGenre } from './main-page-selectors';

const {mockStoreData} = testUtils();

describe('Selectors: mainPage', () => {
  const state = mockStoreData;

  describe('getMainPageState test', () => {
    it('should return state', () => {
      const selected = getMainPageState(state);

      expect(selected)
        .toEqual(state.MAIN);
    });
  });

  describe('getIsMainDataLoaded test', () => {
    it('should return isLoaded', () => {
      const selected = getIsMainDataLoaded(state);

      expect(selected)
        .toEqual(state.MAIN.isLoaded);
    });
  });


  describe('getFilms test', () => {
    it('should return movies', () => {
      const selected = getFilms(state);

      expect(selected)
        .toEqual(state.MAIN.data.movies);
    });
  });

  describe('getPromo test', () => {
    it('should return promo', () => {
      const selected = getPromo(state);

      expect(selected)
        .toEqual(state.MAIN.data.promo);
    });
  });

  describe('getSeletedGenre test', () => {
    it('should return selected genre', () => {
      const selected = getSelectedGenre(state);

      expect(selected)
        .toEqual(state.MAIN.selectedGenre);
    });
  });
});
