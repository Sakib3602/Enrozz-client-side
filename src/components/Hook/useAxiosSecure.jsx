import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://enrozzz.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;