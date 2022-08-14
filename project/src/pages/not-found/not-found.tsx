
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';

function NotFound(): JSX.Element {
  return (
    <section className="user-page">
      <header className="page-header user-page__head">
        <LogoElement />
        <h1 className="page-title user-page__title">404 Not Found</h1>
      </header>
      <FooterElement />
    </section>
  );
}

export default NotFound;
