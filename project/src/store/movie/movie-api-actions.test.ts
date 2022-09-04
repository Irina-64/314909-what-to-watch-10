import { APIRoute } from '../../const/enums';
import { addReviewAction, fetchCurrentFilmDataAction } from './movie-api-actions';
import { APITestUtils, testUtils } from '../../utilites/mocks/test-utilites';
import { redirectToRoute } from '../common/common-actions';
import { SIMILAR_MOVIES_URL_SUFFIX } from '../../const/const';

const {mockCurrentFilm, mockReviews, mockReview, mockSimilarFilms} = testUtils();

const {mockAPI, mockStore} = APITestUtils();

describe('CurrentFilm async actions', () => {
  it('should dispatch fetchCurrentFilmData when GET /movie/:id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${APIRoute.Films}/${mockCurrentFilm.id}`)
      .reply(200, mockCurrentFilm)
      .onGet(`${APIRoute.Review}/${mockCurrentFilm.id}`)
      .reply(200, mockReviews)
      .onGet(`${APIRoute.Films}/${mockCurrentFilm.id}${SIMILAR_MOVIES_URL_SUFFIX}`)
      .reply(200, mockSimilarFilms);

    await store.dispatch(fetchCurrentFilmDataAction(mockCurrentFilm.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentFilmDataAction.pending.type,
      fetchCurrentFilmDataAction.fulfilled.type
    ]);
  });

  it('should dispatch addReview, fetchCurrentFilm and RedirectToRoute when POST /comment/:id', async () => {
    mockAPI
      .onPost(`${APIRoute.Review}/${mockCurrentFilm.id}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(addReviewAction({...mockReview, id: mockCurrentFilm.id}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      addReviewAction.pending.type,
      fetchCurrentFilmDataAction.pending.type,
      redirectToRoute.type,
      addReviewAction.fulfilled.type
    ]);
  });
});
