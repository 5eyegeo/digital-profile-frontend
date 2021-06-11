import React from 'react';
import {Redirect, Route} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import {getKey} from "../helpers/sessionKey";

const PrivateRoute = ({component: Component, ...rest}) => {

  const authToken = JSON.parse(getKey('userAuth'));
  const {accessToken, refreshToken} = authToken;

  return (
    <>
      {navigator.onLine ? (<Route
        {...rest}
        render={(props) => (
          accessToken ? (<DashboardLayout><Component {...props}/></DashboardLayout>) : <Redirect to="/login"/>
        )}
      />) : <Redirect to="/no-internet-connection"/>}
    </>
  );
};
export default PrivateRoute;
