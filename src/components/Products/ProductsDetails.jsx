import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import AllDetails from "../AllDetails/AllDetails";


const ProductsDetails = () => {
    const { id } = useParams();
   
    const axiosPublic = useAxiosPublic();


    const { data,isLoading} = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/productsDetails/${id}`);
        return res.data;
      },
    });
    console.log(data,'PRODUCT DETAILS');
    return (
        <div>
            <AllDetails data={data} isLoading={isLoading}></AllDetails>
        </div>
    );
};

export default ProductsDetails;