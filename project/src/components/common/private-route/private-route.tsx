import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../../const/enums';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../../store/user/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PropsWithChildren<PrivateRouteProps>) => (
  useAppSelector(getAuthStatus) === AuthStatus.Auth
    ? children
    : <Navigate to={AppRoute.SignIn} />
);

export default React.memo(PrivateRoute);
