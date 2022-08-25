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
import { getPromo } from '../../../utilites/selectors/selectors';
import Loading from '../../../pages/loading/loading';

const FilmCardPromo = () => {
  const promo = useAppSelector(getPromo);

  if (!promo.isDataLoaded) {
    return <Loading />;
  }

  if (promo.data) {
    return (
      <section className="film-card">
        <FilmCardBackground movie={promo.data} />

        <WTWElement />

        <HeaderElement style={HeaderStyle.FilmCard}>
          <LogoElement />
          <UserBlock />
        </HeaderElement>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmPosterElement {...promo.data} />
            <FilmCardDescription movie={promo.data}>
              <FilmCardButtons movie={promo.data} />
            </FilmCardDescription>
          </div>
        </div>
      </section>
    );
  }
  return null;
};

export default FilmCardPromo;
