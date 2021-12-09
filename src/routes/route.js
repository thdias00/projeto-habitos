import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();
  console.log("token: ", token);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};

export default Route;