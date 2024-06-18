import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Loader from "../Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {person , loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return  <Loader></Loader>

    }
    if(person){
        return children
    }
    return <Navigate to={"/joinUs"} state={location.pathname} ></Navigate>; 
};

export default PrivateRoute;