import { useParams } from "react-router-dom";
import ThumSlider from "./ThumSlider/ThumSlider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";


const CaroDetailPage = () => {
    const {id} = useParams()
    const axiosPublic = useAxiosPublic()
    const {data}=useQuery({
        queryKey:["caro"],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/slider/${id}`)
            return res.data
        }
    })
     console.log(data)
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 h-[50px]">
            <div className="">
                <ThumSlider data={data}></ThumSlider>
            </div>
            <div className="border"></div>
            
        </div>
    );
};

export default CaroDetailPage;