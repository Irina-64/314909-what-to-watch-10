import FilmCardsList from '../../components/film-list/film-list';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import UserBlock from '../../components/common/user-block/user-block';
import HeaderElement from '../../components/common/header/header-element';
import { ComponentTestID, ComponentText, HeaderStyle, PageTestID } from '../../const/enums';
import Loading from '../loading/loading';
import useUserData from '../../hooks/use-user-data/use-user-data';

const MyListPage = () => {
  const {favorites, isLoaded} = useUserData();

  const hasFavorites = favorites.length > 0;

  return !isLoaded
    ? <Loading />
    : (
      <div className="user-page" data-testid={PageTestID.MyListPage}>
        <HeaderElement style={HeaderStyle.UserPage}>
          <LogoElement />
          <h1 className="page-title user-page__title">
            {ComponentText.MyList}
            {hasFavorites
              ? <span className="user-page__film-count">{favorites.length}</span>
              : null}
          </h1>
          <UserBlock />
        </HeaderElement>
        <section className="catalog">
          {hasFavorites
            ? <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
            : <h2 className="catalog__title">You have no movies in your list.</h2>}
          <FilmCardsList movies={favorites} testId={ComponentTestID.FavoriteFilms} />
        </section>
        <FooterElement />
      </div>
    );
};

export default MyListPage;
