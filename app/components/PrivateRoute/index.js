import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from 'utils/auth';

const PrivateRoute = ({ component: Component ,...rest }) => (
        <Route
            {...rest}
            render={propser =>
                Auth.isUserAuthenticated() ? (
                    <Component {...propser} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: propser.location }
                            }}
                        />
                    )
            }
        />
);


export default PrivateRoute;