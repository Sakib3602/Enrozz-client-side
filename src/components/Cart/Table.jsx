// import Swal from "sweetalert2";

import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const Table = ({t,refetch}) => {
  const axiosPublic = useAxiosPublic()
    function handleDelete(id){
        console.log("clicked",id)

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            mutationDelete.mutate(id)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
       

       
       
    }

    const mutationDelete = useMutation({
      mutationFn : async(id)=>{
        const res = await axiosPublic.delete(`/cartTable/${id}`)
        return res.data
      },
      onSuccess: ()=>{
        refetch()
        toast.success("Item Removed !")
        
      }
      
    })
    return (
       <>
       <tr className="">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={t?.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{t?.title}</div>
            </div>
          </div>
        </td>
        <td>
         {t?.price}
        </td>
        <td>{t?.color === "Pick Your Color" ? "Not Choice" : t?.color}</td>
        <th>
          <button onClick={()=>handleDelete(t?._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
      
       </>
      
    );
};

export default Table;


