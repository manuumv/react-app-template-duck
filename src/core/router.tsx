import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CountContainer } from 'containers/count/count.container';
import { ErrorContainer } from 'containers/error/error.container';
import { AppRoutes } from './model';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={AppRoutes.Home} component={CountContainer} />
      <Route exact path={AppRoutes.Error} component={ErrorContainer} />
      <Redirect to={AppRoutes.Error} />
    </Switch>
  </BrowserRouter>
);
