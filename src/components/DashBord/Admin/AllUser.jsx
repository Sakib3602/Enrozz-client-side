import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data ,isLoading} = useQuery({
        queryKey: ["allUserDataAdmin"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/userDataAdmin")
            return res.data
        }
    })
    console.log(data)
  return (
    <div>
        <div className="text-white h-[100px] w-[95%] m-auto bg-[#006666] selection:m-10 shadow-lg rounded-xl p-8">
        
            <h1 className="text-[30px] font-[600]">All Users ({data?.length})</h1>

        </div>
      <div className="overflow-x-auto lg:m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Email</th>
              <th>Name</th>
            
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                data?.map(da => <tr key={da?._id} className="hover:bg-white hover:shadow-xl ">
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={da?.image}
                            />
                          </div>
                        </div>
                       
                      </div>
                    </td>
                    <td>
                      {da?.email}
                    
                    </td>
                    <td>{da?.name}</td>
                    
                  </tr>)
            }
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllUser;
