import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const ProtectedRoute = () => {
    const auth = localStorage.getItem('profile');

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;



/* return (
    <Route
        {...rest}
        render={(props) => {
            if (auth) return <Component {...props} />;
            if (!auth)
                return (
                    <Navigate to={{ path: '/login', state: { from: props.location } }} />
                );
        }}
    />
); */