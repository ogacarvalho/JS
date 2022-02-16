import React from 'react';

import { Switch as Rotas } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Rotas>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Rotas>
  );
}
