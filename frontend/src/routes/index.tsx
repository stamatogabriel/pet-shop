import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route'

import Login from '../pages/Login'
import Users from '../pages/Users'

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/users" isPrivate component={Users} />
  </Switch>
)

export default routes;