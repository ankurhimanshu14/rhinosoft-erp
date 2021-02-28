// Components/AppRoutes.jsx

import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useRegisterState } from '../Context'
 
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useRegisterState()
    return (
        <Route
            path={path}
            render={props =>
                isPrivate ? (
                    <Redirect
                        to={{ pathname: "/login" }}
                    />
                ) : (
                        <Component {...props} />
                    )
            }
            {...rest}
        />
    )
}
 
export default AppRoutes;