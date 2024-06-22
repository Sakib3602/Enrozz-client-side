import { useMutation } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";
import { FaCarAlt } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const OrderTable = ({ o, isLoading, i ,refetch}) => {
    const axiosSecure = useAxiosSecure()


    function handleUpdate(id){

        if(o?.userName === "DONE"){
           return toast.error("All Ready On The Way !")
        }

        console.log(id)
        mutionPok.mutate(id)
    }

    const mutionPok = useMutation({
        mutationFn : async (id)=>{
            const res = await axiosSecure.patch(`/upOrder/${id}`)
            return res.data
        },
        onSuccess : ()=>{
            refetch()
            toast.success("Order Delevery Done")
        }
    })










  if (isLoading) return <Loader></Loader>;
  return (
    <tr className="hover:bg-base-200">
      <th>{i + 1}</th>
      <td>{o?.product}</td>
      <td>p{o?.deleveryPlace}</td>
      <td>{o?.phone}</td>

      <td>{o?.tranId}</td>
      <Toaster></Toaster>

      <td>

        {
           o?.payment === "success"  ?  <button onClick={()=>handleUpdate(o?._id)} className={o?.userName === "DONE" ? "font-[600] p-2  bg-blue-600 text-white" : "font-[600] p-2  bg-orange-600 text-white"}>{o?.userName === "DONE" ? "On The Way" : "Delever Now"}</button> : <button className="font-[600] p-2  bg-orange-600 text-white">Delete</button>
        }
        
      </td>
    </tr>
  );
};

export default OrderTable;
