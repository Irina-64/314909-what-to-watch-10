import { AppRoute } from '../../const/enums';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';

const NotFound = () => {
  <div className="user-page">
    <header className="page-header user-page__head">
      <LogoElement />
      <h1 className="page-title user-page__title">404 Not Found</h1>
    </header>
    <div className="sign-in user-page__content">
      <form action={AppRoute.Main} className="sign-in__form">
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Return to Main Page</button>
        </div>
      </form>
    </div>
    <FooterElement />
  </div>;
};

export default NotFound;
