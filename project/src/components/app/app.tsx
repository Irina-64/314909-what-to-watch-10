
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import AddReview from '../../pages/add-review/add-review';
import SignIn from '../../pages/sign-in/sign-in';
import MainPage from '../../pages/main-page/main-page';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../common/private-route/private-route';

const goToMainPage = <Navigate to={AppRoute.Main} />;

function App(): JSX.Element {
  return (
    <BrowserRouter>
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
                <MyList />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
