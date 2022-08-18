import FilmCardsList from '../../components/film-list/film-list';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import UserBlock from '../../components/common/user-block/user-block';
import HeaderElement from '../../components/common/header-element/header-element';
import { HeaderStyle } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getFavorites } from '../../utilites/selectors/selectors';
import Loading from '../loading/loading';

const MyListPage = () => {
  const favorites = useAppSelector(getFavorites);

  if (!favorites.isDataLoaded) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <HeaderElement style={HeaderStyle.UserPage}>
        <LogoElement />
        <h1 className="page-title user-page__title">My list
          <span className="user-page__film-count">{favorites.data.length}</span>
        </h1>
        <UserBlock />
      </HeaderElement>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardsList movies={favorites.data} isLong />
      </section>

      <FooterElement />
    </div>
  );
};

export default MyListPage;
