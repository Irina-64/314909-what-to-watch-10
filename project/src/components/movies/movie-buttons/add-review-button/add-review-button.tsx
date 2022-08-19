import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const/enums';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import Film from '../../../../types/film';
import { getAuthStatus } from '../../../../utilites/selectors/selectors';

const REVIEW_LINK_SUFFIX = '/review';

const AddReviewButton = ({ id }: Film) => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuth = (authorizationStatus === AuthorizationStatus.Auth);
  return <Link to={isAuth ? `${AppRoute.Films}${id}${REVIEW_LINK_SUFFIX}` : AppRoute.SignIn} className="btn film-card__button">Add review</Link>;
};

export default AddReviewButton;
