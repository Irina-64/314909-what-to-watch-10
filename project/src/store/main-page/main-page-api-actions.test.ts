import { APIRoute } from '../../const/enums';
import { fetchMainPageDataAction } from './main-page-api-actions';
import { APITestUtils, testUtils } from '../../utilites/mocks/test-utilites';
import { cleanup } from '@testing-library/react';

const {mockPromo, mockFilms} = testUtils();

const {mockAPI, mockStore} = APITestUtils();

describe('MainPage async actions', () => {
  beforeEach(cleanup);

  it('should dispatch Load_AllMovies when GET /movies', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilms);

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);


    await store.dispatch(fetchMainPageDataAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMainPageDataAction.pending.type,
      fetchMainPageDataAction.fulfilled.type
    ]);
  });
});
