import GenreListComponent from '../../components/genres/genre-list/genre-list';
import FilmCardPromo from '../../components/movies/movie-promo/promo';
import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { getMovies } from '../../utilites/selectors/selectors';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';

const MainPage = () => (
  <>
    <FilmCardPromo />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreListComponent />
        <FilmCardsList movies={useAppSelector(getMovies)} countPerStep={MOVIE_CARD_MAIN_COUNT} isMain />
      </section>
      <FooterElement />
    </div>
  </>
);

export default MainPage;
