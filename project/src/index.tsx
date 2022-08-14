import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockFilmList from './mocks/films';
import { FilmTypeList } from './const/const';
import mockFilmPromo from './mocks/promo';
import { getRandomInteger } from './utilites/utilites';

const randomMovie = mockFilmList[getRandomInteger(0, mockFilmList.length - 1)];

const MainPageProps = {
  promo: mockFilmPromo,
  movies: mockFilmList,
  genres: FilmTypeList,
  myMovies: mockFilmList.filter((movie) => movie.isFavorite),
  randomMovie: randomMovie,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App {...MainPageProps} />
  </React.StrictMode>,
);
