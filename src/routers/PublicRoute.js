import { Navigate } from "react-router";

export const PublicRoute = ({ children, isLogged }) => {

    console.log(isLogged);
    return isLogged ? <Navigate to="/" /> : children;
}
