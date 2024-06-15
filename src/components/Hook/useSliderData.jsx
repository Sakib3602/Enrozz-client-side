import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";


const useSliderData = () => {
    const axiosPublic = useAxiosPublic()
    const {data, isLoading} = useQuery({
        queryKey: ["sliderData"],
        queryFn: async()=>{
            const res = await axiosPublic.get("/slider")
            return res.data
        }

    })
    return [data, isLoading]
};

export default useSliderData;