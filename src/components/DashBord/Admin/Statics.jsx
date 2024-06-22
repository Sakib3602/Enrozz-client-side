import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Loader from "../../Loader/Loader";
import Orderdata from "./Orderdata";

const Statics = () => {
    const axiosSecure = useAxiosSecure()




    const {data,isLoading} = useQuery({
        queryKey: ["statics"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/total")
            return res.data
        }
    })
    console.log(data,"skcnidsnvikn")

    // ooooooooooooooooooooooooooooooooooooooooooooooo
    const [filterOrderBySuccess,filterOrderByPending,totalAmount] = Orderdata()
    console.log(filterOrderBySuccess,"sdcsdocjo",filterOrderByPending)


    
  return (
    <div className="w-[95%] bg-white min-h-screen  m-auto">
      <div className="bg-[#006666] w-[100%] h-[100px] pt-5 m-auto">
        <h1 className="text-center text-[40px] font-[700] text-white">
          STATICS
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <div className="border h-[250px] p-5 mt-5 bg-red-500 text-white">
          <h1 className="text-[33px] text-center">TOTAL USER</h1>
          <h1 className="text-[100px] font-[700] text-center">{data?.totalUser}</h1>
        </div>
        <div className="border h-[250px] p-5 mt-5 bg-purple-500 text-white">
          <h1 className="text-[33px] text-center">TOTAL REVIN</h1>
          <h1 className="text-[100px] font-[700] text-center">{parseInt(totalAmount)}</h1>
        </div>
        <div className="border h-[250px] p-5 mt-5 bg-blue-500 text-white">
          <h1 className="text-[33px] text-center">TOTAL ORDER</h1>
          <h1 className="text-[100px] font-[700] text-center">{filterOrderBySuccess?.length}</h1>
        </div>
        <div className="border h-[250px] p-5 mt-5 bg-green-500 text-white">
          <h1 className="text-[33px] text-center">PENDING ORDER</h1>
          <h1 className="text-[100px] font-[700] text-center">{filterOrderByPending?.length}</h1>
        </div>
        <div className="border h-[250px] p-5 mt-5 bg-yellow-500 text-white">
          <h1 className="text-[33px] text-center">PENDING CART</h1>
          <h1 className="text-[100px] font-[700] text-center">{data?.totalCart}</h1>
        </div>
        
        <div className="border h-[250px] p-5 mt-5 bg-pink-500 text-white">
          <h1 className="text-[33px] text-center">TOTAL ITEMS</h1>
          <h1 className="text-[100px] font-[700] text-center">{data?.totalPosts}</h1>
        </div>
      </div>
    </div>
  );
};

export default Statics;
