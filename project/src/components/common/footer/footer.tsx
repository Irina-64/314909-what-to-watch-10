import LogoElement from '../logo/logo';
import { ComponentText } from '../../../const/enums';

const FooterElement = () => (
  <footer className="page-footer">
    <LogoElement isLight/>
    <div className="copyright">
      <p>{ComponentText.Footer}</p>
    </div>
  </footer>
);

export default FooterElement;
