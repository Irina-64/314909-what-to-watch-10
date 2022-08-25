import { HeaderStyle } from '../../../const/enums';
import HeaderElement from '../../common/header/header-element';
import LogoElement from '../../common/logo/logo';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import FilmCardBackground from '../images/film-background/film-card-backgr';
import FilmPosterElement from '../images/film-poster/film-poster';
import FilmCardButtons from '../movie-buttons/movie-buttons';
import FilmCardDescription from '../card-description/card-description';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getPromo } from '../../../store/main-page/main-page-selectors';

const FilmCardPromo = () => {
  const promo = useAppSelector(getPromo);

  if (promo) {
    return (
      <section className="film-card">
        <FilmCardBackground movie={promo} />
        <WTWElement />
        <HeaderElement style={HeaderStyle.FilmCard}>
          <LogoElement />
          <UserBlock />
        </HeaderElement>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPosterElement {...promo} />
            <FilmCardDescription movie={promo}>
              <FilmCardButtons movie={promo} />
            </FilmCardDescription>
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default FilmCardPromo;
