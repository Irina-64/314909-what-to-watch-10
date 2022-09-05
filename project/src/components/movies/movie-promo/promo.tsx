import { ComponentTestID, HeaderStyle } from '../../../const/enums';
import HeaderElement from '../../common/header/header-element';
import LogoElement from '../../common/logo/logo';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import FilmCardBackground from '../images/film-background/film-card-backgr';
import FilmPosterElement from '../images/film-poster/film-poster';
import FilmButtons from '../movie-buttons/movie-buttons';
import FilmCardDescription from '../card-description/card-description';
import Film from '../../../types/film';

const FilmCardPromo = ({promo}: {promo: Film | null}) => promo
  ? (
    <section className="film-card" data-testid={ComponentTestID.PromoCard}>
      <FilmBackground movie={promo} />
      <WTWElement />
      <HeaderElement style={HeaderStyle.FilmCard}>
        <LogoElement />
        <UserBlock />
      </HeaderElement>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmPoster {...promo} />
          <FilmCardDescription movie={promo}>
            <FilmButtons id={promo.id} />
          </FilmCardDescription>
        </div>
      </div>
    </section>
  )
  : null;

export default FilmCardPromo;
