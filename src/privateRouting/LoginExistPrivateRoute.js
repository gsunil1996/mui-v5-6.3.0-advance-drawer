import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const LoginExistPrivateRoute = () => {

    const token = localStorage.getItem("type");
    console.log(token, 'inside token')
    return !token ? <Outlet /> : <Navigate to={-1} />;

}

export default LoginExistPrivateRoute