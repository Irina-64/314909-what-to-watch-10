
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import MainPage from '../../pages/main-page/main-page';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { MainProps } from '../../types/props';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = (MainPageProps: MainProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<MainPage {...MainPageProps} />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />

        <Route path={AppRoute.Player}>
          <Route index element={goToMainPage} />
          <Route path={AppRoute.Player} element={<Player />} />
        </Route>
        <Route path={AppRoute.Films}>
          <Route index element={goToMainPage} />
        </Route>
        <Route path={AppRoute.Film}>
          <Route index element={<MoviePage {...MainPageProps} />} />
        </Route>
        <Route path={AppRoute.AddReview}>
          <Route index element={<AddReview />} />
        </Route>

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList {...MainPageProps.myMovies} />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

