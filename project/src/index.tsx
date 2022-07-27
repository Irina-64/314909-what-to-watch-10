import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import filmList from './mocks/films';
import promoFilm from './mocks/promo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      {...{ filmList, promoFilm }}
    />
  </React.StrictMode>,
);
