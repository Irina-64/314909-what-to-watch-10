import { Fragment } from 'react';
import { MainProps } from '../../types/props';
import GenreListComponent from '../../components/genres/genre-list/genre-list';
import FilmPromoComponent from '../../components/movies/movie-promo/promo';
import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import ShowMoreButton from '../../components/show-more/show-more';

const MainPage = ({ promo, movies, genres, myMovies, randomMovie }: MainProps) => (
  <Fragment>
    <FilmPromoComponent promo={promo} myMovies={myMovies} />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreListComponent genres={genres} />
        <FilmCardsList movies={movies} count={4} />
        <ShowMoreButton />
      </section>
      <FooterElement />
    </div>
  </Fragment>
);

export default MainPage;
