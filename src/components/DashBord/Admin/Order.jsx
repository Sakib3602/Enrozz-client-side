import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import OrderTable from "./OrderTable";
import { useState } from "react";

const Order = () => {
  const axiosSecure = useAxiosSecure();

  const [orderTT,setOrderTT] = useState(true)

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["ordersAll"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ordersAllForAdmin");
      return res.data;
    },
  });

  const filterOrderBySuccess = orders.filter((f) => f?.payment === "success");
  const filterOrderByPending = orders.filter((f) => f?.payment === "pending");

    console.log(orderTT,"lkscolsco")
  return (
    <div className="w-[95%] bg-white min-h-screen  m-auto">
      <div className="bg-[#006666] w-[100%] h-[100px] pt-5 m-auto">
        <h1 className="text-center text-[40px] font-[700] text-white">
          ORDER DATA
        </h1>
      </div>

     

      <div className="w-full mt-5 space-y-3 ml-5">
     
       <div className="flex space-x-3">
       
       <button onClick={()=>setOrderTT(true)} className="wop ml-5  border-black border-[2px]">
    <span className="pow">Success Payment</span>
</button>
       <button  onClick={()=>setOrderTT(false)} className="wop   border-black border-[2px]">
    <span className="pow">Pending Payment</span>
</button>
      
       </div>
       <h1 className="ml-5 text-[30px] font-[400]">{orderTT ? "Delevery Pending List (Payment Done)" : "Pending Payment."}</h1>
      </div>

      {/*  */}

      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Delevery Place</th>
              <th>Phone</th>
              <th>Payment Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                orderTT ? filterOrderBySuccess?.map((o, i) => (
                    <OrderTable
                      key={o?._id}
                      o={o}
                      i={i}
                      isLoading={isLoading}
                    ></OrderTable>
                  )) : filterOrderByPending?.map((o, i) => (
                    <OrderTable
                      key={o?._id}
                      o={o}
                      i={i}
                      isLoading={isLoading}
                    ></OrderTable>
                  ))
            }
           

            {/* row 2 */}
          </tbody>
        </table>
      </div>

      {/*  */}
    </div>
  );
};

export default Order;
