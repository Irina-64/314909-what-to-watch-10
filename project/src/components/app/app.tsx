import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import AddReview from '../../pages/add-review/add-review';
import Loading from '../../pages/loading/loading';
import SignIn from '../../pages/sign-in/sign-in';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import { checkAuth } from '../../utilites/utilites';
import PrivateRoute from '../common/private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import { store } from '../../store/index';
import MainPage from '../../pages/main-page/main-page';
import { getAuthStatus } from '../../store/user/user-selectors';
import { fetchFavoritesAction } from '../../store/user/user-api-actions';
import { getIsMainDataLoading } from '../../store/main-page/main-page-selectors';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = () => {
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getIsMainDataLoading);
  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (isAuth) {
        store.dispatch(fetchFavoritesAction());
      }
    }
    return () => {
      isMounted = false;
    };
  }, [isAuth]
  );

  if (checkAuth(authStatus, AuthStatus.Unknown) || !isLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<MainPage />} />

        <Route path={AppRoute.Login} element={<LoginPage />} />

        <Route path={AppRoute.FilmPlayer} element={<MoviePlayerPage />} />

        <Route path={AppRoute.Film} element={<MoviePage />} />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewPage />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />

      </Route>

      <Route path={AppRoute.Player} element={goToMainPage} />
      <Route path={AppRoute.Films} element={goToMainPage} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
