import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UserSingleData = () => {
    const {person} = useContext(AuthContext)

    const axiosSecure = useAxiosSecure()

    const {data : userSingleData = [] ,isloading} = useQuery({
        queryKey:['userdataeeed',person?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/usersingleData/${person?.email}`)
            
            return res.data
        }
    })

    // console.log(userSingleData,"hook")
    
    return [userSingleData,isloading]
};

export default UserSingleData;