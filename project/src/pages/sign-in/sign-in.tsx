import HeaderElement from '../../components/common/header/header-element';
import LogoElement from '../../components/common/logo/logo';
import FooterElement from '../../components/common/footer/footer';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import { HeaderStyle } from '../../const/enums';

const SignIn = () => (
  <div className="user-page">
    <HeaderElement style={HeaderStyle.UserPage}>
      <LogoElement />
      <h1 className="page-title user-page__title">Sign in</h1>
    </HeaderElement>
    <div className="sign-in user-page__content">
      <SignInForm />
    </div>
    <FooterElement />
  </div >
);

export default SignIn;

