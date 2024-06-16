import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";

import AllDetails from "../AllDetails/AllDetails";

const CaroDetailPage = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["caro"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/slider/${id}`);
      return res.data;
    },
  });
  console.log(data);

  return <>
<AllDetails data={data}></AllDetails>

  </>
};

export default CaroDetailPage;
