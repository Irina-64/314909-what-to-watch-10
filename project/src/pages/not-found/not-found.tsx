import { Link } from 'react-router-dom';
import HeaderElement from '../../components/common/header/header-element';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import { AppRoute, ComponentText, HeaderStyle, PageTestID } from '../../const/enums';
import './not-found.css';

const NotFound = () => (
  <section className="not-found-page" data-testid={PageTestID.NotFound}>
    <HeaderElement style={HeaderStyle.UserPage}>
      <LogoElement />
      <h1 className="page-title not-found-page__title">{ComponentText.NotFound}</h1>
    </HeaderElement>
    <div className="go-back not-found-page__content">
      <form action={AppRoute.Main} className="go-back__form">
        <div className="go-back__submit">
          <button className="go-back__btn" type="submit">Return to Main Page</button>
        </div>
      </form>
    </div>
    <FooterElement />
  </section>
);

export default NotFound;
