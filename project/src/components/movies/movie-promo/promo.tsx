import { HeaderStyle } from '../../../const/enums';
import { MainProps } from '../../../types/props';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo/logo';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import FilmCardBackground from '../images/film-background/film-card-backgr';
import FilmPosterElement from '../images/film-poster/film-poster';
import AddReviewButton from '../movie-buttons/add-review-button/add-review-button';
import FilmCardButtons from '../movie-buttons/movie-buttons';
import MyListAddButton from '../movie-buttons/mylist-add-button/mylist-add-button';
import PlayMovieButton from '../movie-buttons/play-movie-button/play-movie-button';
import FilmCardDescription from '../card-description/card-description';

type FilmPromoProps = Pick<MainProps, 'promo' | 'myMovies'>

const FilmPromoComponent = ({ promo, myMovies }: FilmPromoProps) => (
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
          <FilmCardButtons>
            <PlayMovieButton {...promo} />
            <MyListAddButton count={myMovies.length} />
            <AddReviewButton {...promo} />
          </FilmCardButtons>
        </FilmCardDescription>
      </div>
    </div>
  </section>
);

export default FilmPromoComponent;
