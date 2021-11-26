import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, isLogged }) => {
    console.log(isLogged);
    return isLogged ? children : <Navigate to='auth/login'/>;
}