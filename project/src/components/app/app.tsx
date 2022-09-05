import { Navigate, Route, Routes } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { AppRoute, AuthStatus } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import AddReview from '../../pages/add-review/add-review';
import Loading from '../../pages/loading/loading';
import SignIn from '../../pages/sign-in/sign-in';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import { checkAuth } from '../../utilites/utilites';
import PrivateRoute from '../common/private-route/private-route';
import { store } from '../../store/index';
import { useLayoutEffect } from 'react';
import MainPage from '../../pages/main-page/main-page';
import { getAuthStatus } from '../../store/user/user-selectors';
import { fetchFavoritesAction } from '../../store/user/user-api-actions';
import { getIsMainDataLoading } from '../../store/main-page/main-page-selectors';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = () => {
  const authStatus = useAppSelector(getAuthStatus);
  const isLoaded = useAppSelector(getIsMainDataLoading);
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
      <Loading />
    );
  }

  return (
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<MainPage />} />

        <Route path={AppRoute.SignIn} element={<SignIn />} />

        <Route path={AppRoute.MoviePlayer} element={<MoviePlayerPage />} />

        <Route path={AppRoute.Film} element={<MoviePage />} />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />

      </Route>

      <Route path={AppRoute.Player} element={goToMainPage} />
      <Route path={AppRoute.Films} element={goToMainPage} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
