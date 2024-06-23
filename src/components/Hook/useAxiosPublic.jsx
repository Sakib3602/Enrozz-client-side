import axios from "axios";

 
 const axiosPublic = axios.create({
    baseURL: "https://enrozzz.vercel.app"
 })

const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;