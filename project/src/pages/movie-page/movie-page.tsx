import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const/enums';
import FilmCardsListComponent from '../../components/film-list/film-list';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import UserBlockElement from '../../components/common/user-block/user-block';
import mockFilmList from '../../mocks/films';
import { MainProps } from '../../types/props';
import FilmCardBackground from '../../components/movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../components/movies/images/film-poster/film-poster';
import PlayButtonsElement from '../../components/play-button/play-button';
import WTWElement from '../../components/common/wtw/wtw';

const MoviePage = ({ myMovies }: MainProps) => {
  const { id } = useParams();

  const currentMovie = mockFilmList.find((mov) => mov.id === id);
  const similarMovies = mockFilmList.slice(0, 4);

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBackground {...currentMovie} />
          <WTWElement />

          <header className="page-header film-card__head">
            <LogoElement />
            <UserBlockElement />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>
              <PlayButtonsElement id={currentMovie.id} myMoviesCount={myMovies.length} hasAddReview />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPosterElement {...currentMovie} isBig />

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#overview" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#details" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#reviews" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{currentMovie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentMovie.description}</p>
                <p className="film-card__director"><strong>Director: {currentMovie.director}</strong></p>
                <p className="film-card__starring"><strong>Starring: {currentMovie.starring} and others</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmCardsListComponent movies={similarMovies} />
        </section>
        <FooterElement />
      </div>
    </div>
  );
};

export default MoviePage;
