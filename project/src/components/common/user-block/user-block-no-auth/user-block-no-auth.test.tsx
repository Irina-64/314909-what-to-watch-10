import {fireEvent, render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../const/const';
import { AppRoute, AuthStatus, ComponentText, PageTestID } from '../../../../const/enums';
import SignIn from '../../../../pages/sign-in/sign-in';
import { mockStoreDefaultProps } from '../../../../utilites/mocks/mocks';
import { testUtils } from '../../../../utilites/mocks/test-utilites';
import UserBlockNoAuth from './user-block-no-auth';

const {wrapper, mockHistory} = testUtils({...mockStoreDefaultProps, authStatus: AuthStatus.NoAuth});

describe('Component: UserBlockNoAuth', () => {
  it('should render correctly', () => {
    render(
      <UserBlockNoAuth />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.SignIn)).toBeInTheDocument();
  });

  it('should redirect to /login when user clicks on SignIn and is not auth', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<UserBlockNoAuth />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.LoginPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(ComponentText.SignIn));

    expect(screen.getByTestId(PageTestID.LoginPage)).toBeInTheDocument();
  });
});
