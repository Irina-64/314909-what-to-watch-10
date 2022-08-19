import { HeaderStyle, PosterSize } from '../../../const/enums';
import Film from '../../../types/film';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo/logo';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import FilmCardButtons from '../../movies/movie-buttons/movie-buttons';
import FilmCardDescription from '../../movies/card-description/card-description';
import FilmBackground from '../../movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../movies/images/film-poster/film-poster';
import FilmTabs from '../../movies/movie-tabs/movie-tabs';

const MoviePageFilmCard = (movie: Film) => (
  <section className="film-card film-card--full">
    <div className="film-card__hero">
      <FilmBackground movie={movie} />
      <WTWElement />
      <HeaderElement style={HeaderStyle.FilmCard}>
        <LogoElement />
        <UserBlock />
      </HeaderElement>
      <div className="film-card__wrap">
        <FilmCardDescription movie={movie}>
          <FilmCardButtons movie={movie} />
        </FilmCardDescription>
      </div>
    </div>
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <FilmPosterElement {...movie} size={PosterSize.Big} />
        <FilmTabs movie={movie} />
      </div>
    </div>
  </section>
);

export default MoviePageFilmCard;
