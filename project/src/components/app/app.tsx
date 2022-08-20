import { Navigate, Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import AddReview from '../../pages/add-review/add-review';
import Loading from '../../pages/loading/loading';
import SignIn from '../../pages/sign-in/sign-in';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import { getAuthStatus, getIsDataLoaded } from '../../utilites/selectors/selectors';
import { checkAuth } from '../../utilites/utilites';
import PrivateRoute from '../common/private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import { store } from '../../store/index';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/main-page/main-page-api-actions';
import MainPage from '../../pages/main-page/main-page';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = () => {
  const authorizationStatus = useAppSelector(getAuthStatus);

  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const isAuth = checkAuth(authorizationStatus, AuthorizationStatus.Auth);

  useEffect(() => {
    if (isAuth) {
      store.dispatch(fetchFavoritesAction());
    }
  }, [isAuth]
  );

  if (checkAuth(authorizationStatus, AuthorizationStatus.Unknown) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.SignIn} element={<SignIn />} />
          <Route path={AppRoute.Player}>
            <Route index element={goToMainPage} />
            <Route path={AppRoute.MoviePlayerPage} element={<MoviePlayerPage />} />
          </Route>
          <Route path={AppRoute.Films}>
            <Route index element={goToMainPage} />
          </Route>
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePage />} />
          </Route>
          <Route path={AppRoute.AddReview}>
            <Route index element={<AddReview />} />
          </Route>
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute >
                <MyList />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
