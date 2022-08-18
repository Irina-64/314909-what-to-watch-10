import GenreListComponent from '../../components/genres/genre-list/genre-list';
import FilmCardPromo from '../../components/movies/movie-promo/promo';
import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import { getMovies, getSelectedGenre } from '../../utilites/selectors/selectors';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { filterMoviesByGenre } from '../../utilites/utilites';
import { Genre } from '../../const/enums';
import ShowMoreButton from '../../components/show-more/show-more';

const MainPage = () => {
  const movies = useAppSelector(getMovies).data;
  const selectedGenre = useAppSelector(getSelectedGenre);
  const filteredMovies = selectedGenre === Genre.AllGenres ? movies : filterMoviesByGenre(movies, selectedGenre);
  return (
  <>
    <FilmCardPromo />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreListComponent />
        {filteredMovies
            ? <MovieCardsList movies={filteredMovies} isLong />
            : null}
        <ShowMoreButton />
      </section>
      <FooterElement />
    </div>
  </>
);};

export default MainPage;
