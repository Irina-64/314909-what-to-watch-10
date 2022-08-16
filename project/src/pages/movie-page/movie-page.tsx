import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, HeaderStyle, PosterSize } from '../../const/enums';
import FilmCardsList from '../../components/film-list/film-list';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import UserBlockElement from '../../components/common/user-block/user-block';
import mockFilmList from '../../mocks/films';
import { MainProps } from '../../types/props';
import FilmCardBackground from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import FilmCardButtons from '../../components/movies/movie-buttons/movie-buttons';
import WTWElement from '../../components/common/wtw/wtw';
import HeaderElement from '../../components/common/header-element/header-element';
import AddReviewButton from '../../components/movies/movie-buttons/add-review-button/add-review-button';
import PlayFilmCardButton from '../../components/movies/movie-buttons/play-movie-button/play-movie-button';
import MyListAddButton from '../../components/movies/movie-buttons/mylist-add-button/mylist-add-button';
import FilmCardDescription from '../../components/movies/card-description/card-description';
import FilmTabs from '../../components/movies/movie-tabs/movie-tabs';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';

const MoviePage = ({ myMovies }: MainProps) => {
  const { id } = useParams();

  const currentMovie = mockFilmList.find((mov) => mov.id === id);

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const similarMovies = mockFilmList.filter((movie) => movie.genre === currentMovie.genre);
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBackground movie={currentMovie} />
          <WTWElement />

          <HeaderElement style={HeaderStyle.FilmCard}>
            <LogoElement />
            <UserBlockElement />
          </HeaderElement>

          <div className="film-card__wrap">
            <FilmCardDescription movie={currentMovie}>
              <FilmCardButtons>
                <PlayFilmCardButton {...currentMovie} />
                <MyListAddButton count={myMovies.length} />
                <AddReviewButton {...currentMovie} />
              </FilmCardButtons>
            </FilmCardDescription>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPosterElement {...currentMovie} size={PosterSize.Big} />
            <FilmTabs movie={currentMovie} />
          </div>
        </div>
      </section >

      <div className="page-content">
        {similarMovies
          ? (
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <FilmCardsList movies={mockFilmList.filter((movie) => movie.genre === currentMovie.genre)} count={MOVIE_CARD_MAIN_COUNT} />
            </section>
          )
          : null}
        <FooterElement />
      </div >
    </>
  );
};

export default MoviePage;
