import Login from "../pages/Auth/Login";
import PageNotFound from "../pages/Error/PageNotFound";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import NoInterNetConnection from "../pages/Error/NoInterNetConnection";
import PrivateRouteItem from "./PrivateRouteItem";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const PageRouter = () => {
  return (
    <>
      <Switch>
        {PrivateRouteItem.map((value, index) => (
          <PrivateRoute
            key={index}
            exact
            path={value.path}
            component={value.component}
          />
        ))}

        <AppRoute
          exact
          path="/no-internet-connection"
          component={NoInterNetConnection}
          layout={AuthLayout}
        />
        <AppRoute exact path="/login" component={Login} layout={AuthLayout} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </>
  );
};

export default PageRouter;
