import { useNavigate } from "react-router-dom";
import UserSingleData from "../../Hook/UserSingleData";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";


const SafeUrlAdmin = ({children}) => {
    const {person , logOut} = useContext(AuthContext)
    const [userSingleData, isLoading] = UserSingleData()
    const navigate = useNavigate()
    if(userSingleData?.role === 'admin'){
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