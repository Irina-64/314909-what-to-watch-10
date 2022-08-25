import GenreListComponent from '../../components/genres/genre-list/genre-list';
import FilmCardPromo from '../../components/movies/movie-promo/promo';
import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import { MovieList } from '../../const/enums';

const MainPage = () => (
  <>
    <FilmCardPromo />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreListComponent />
        <FilmCardsList movieList={MovieList.MainPage} isLong />
      </section>
      <FooterElement />
    </div>
  </>
);

export default MainPage;
