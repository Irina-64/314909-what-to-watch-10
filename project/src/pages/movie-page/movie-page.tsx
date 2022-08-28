import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import { MovieList } from '../../const/enums';
import MoviePageFilmCard from '../../components/movies/movie-page-film-card/movie-page-film-card';

const MoviePage = () => (
  <>
    <MoviePageFilmCard />
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmCardsList movieList={MovieList.MoviePage} />
      </section>
      <FooterElement />
    </div >
  </>
);

export default MoviePage;
