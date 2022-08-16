import FilmCardsList from '../../components/film-list/film-list';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import UserBlockElement from '../../components/common/user-block/user-block';
import Film from '../../types/film';
import { MOVIE_CARD_SIMILAR_COUNT } from '../../const/const';

function MyList(myMovies: Film[]): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoElement />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myMovies.length}</span></h1>
        <UserBlockElement />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmCardsList movies={myMovies} count={MOVIE_CARD_SIMILAR_COUNT}/>
      </section>
      <FooterElement />
    </div>
  );
}

export default MyList;
