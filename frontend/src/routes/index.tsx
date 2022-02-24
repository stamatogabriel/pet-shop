import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route'

import Login from '../pages/Login'
import Users from '../pages/Users'
import Clients from '../pages/Clients';

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/users" isPrivate component={Users} />
    <Route exact path="/clients" isPrivate component={Clients} />
  </Switch>
)

export default routes;