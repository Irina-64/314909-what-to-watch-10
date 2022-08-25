import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../../../const/enums';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import Film from '../../../../types/film';
import { getAuthStatus } from '../../../../utilites/selectors/selectors';

const REVIEW_LINK_SUFFIX = '/review';

const AddReviewButton = ({ id }: Film) => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuth = (authorizationStatus === AuthStatus.Auth);
  return isAuth ? <Link to={`${AppRoute.Films}${id}${REVIEW_LINK_SUFFIX}`} className="btn film-card__button" > Add review</Link> : null;
};

export default React.memo(AddReviewButton);
