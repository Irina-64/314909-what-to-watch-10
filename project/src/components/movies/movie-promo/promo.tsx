import { MainProps } from '../../../types/props';
import LogoElement from '../../common/logo/logo';
import UserBlockElement from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import FilmCardBackground from '../images/film-background/film-card-backgr';
import FilmPosterElement from '../images/film-poster/film-poster';
import PlayButtonsElement from '../../play-button/play-button';

type FilmPromoProps = Pick<MainProps, 'promo' | 'myMovies'>

const FilmPromoComponent = ({ promo, myMovies }: FilmPromoProps) => {
  const { name, genre, released } = promo;

  return (
    <section className="film-card">
      <FilmCardBackground {...promo} />

      <WTWElement />

      <header className="page-header film-card__head">
        <LogoElement />
        <UserBlockElement />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">

          <FilmPosterElement {...promo} />

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <PlayButtonsElement id={promo.id} myMoviesCount={myMovies.length} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmPromoComponent;
