import { useNavigate } from "react-router-dom";
import UserSingleData from "../../Hook/UserSingleData";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../Loader/Loader";


const SafeUrlAdmin = ({children}) => {
    const {person , logOut} = useContext(AuthContext)
    const [userSingleData, isLoading] = UserSingleData()
    const navigate = useNavigate()
    if(isLoading){
        return <Loader></Loader>
    }
   else if(userSingleData?.role === 'admin'){
        return children
    }
    else{
        logOut()
        .then()
        .then()
        return navigate("/joinUs")
    }
};

export default SafeUrlAdmin;