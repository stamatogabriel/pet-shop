import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route'

import Login from '../pages/Login'
import Users from '../pages/Users'
import Clients from '../pages/Clients';
import Pets from '../pages/Pets';
import Products from '../pages/Products';
import Sales from '../pages/Sales';

const routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/users" isPrivate component={Users} />
    <Route exact path="/clients" isPrivate component={Clients} />
    <Route exact path="/pets" isPrivate component={Pets} />
    <Route exact path="/products" isPrivate component={Products} />
    <Route exact path="/sales" isPrivate component={Sales} />
  </Switch>
)

export default routes;