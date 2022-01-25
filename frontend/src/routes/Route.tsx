import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useSelector } from 'react-redux'
import { RootState } from "../store/modules/rootReducer";

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.FC;
}

const RouteWrapper: React.FC<IRouteProps> = ({ isPrivate, component, ...rest }) => {
  const { signed } = useSelector((state: RootState) => state.auth)

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} component={component} />;
};

export default RouteWrapper;
