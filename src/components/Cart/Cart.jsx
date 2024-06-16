import { useContext } from "react";
import Table from "./Table";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loader from "../Loader/Loader";
import offer from "../../assets/60_-off-web.png"
import CartSlider from "./CartSlider";

const Cart = () => {
    const {person} = useContext(AuthContext)
    const axiosPublic =useAxiosPublic()

    const {data, isLoading} = useQuery({
        queryKey: ["cartTable"],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/cartTable/${person?.email}`)
            return res.data
        }
    })

    console.log(data,"tabel")

if(isLoading){
    return <Loader></Loader>
}

  return (
    <div className="w-[90%] mt-10 md:w-[90%] lg:w-[75%] gap-20 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className=" min-h-[80vh]">
        <h1 className="text-[40px] text-center font-[700]">Your Cart Items</h1>
        <div className="divider"></div>
        {/* table */}

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th> Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
            data?.map(t =>  <Table key={t?._id} t={t}></Table>)
        }
              
              {/* row 2 */}
            </tbody>
            {/* foot */}
          </table>
        </div>

        <div className="divider"></div>

        <div className="flex justify-between px-8  text-[18px] font-[600] mb-5">
            <h1>Tax</h1>
            <h1>$00</h1>
        </div>
        <div className="flex justify-between px-8 text-[18px] font-[600] mb-5">
            <h1>Shipping Charge</h1>
            <h1>$20</h1>
        </div>
        <div className="divider"></div>

        <div className="flex justify-between px-8 text-[18px] font-[600] mb-5">
            <h1>Total Price</h1>
            <h1>$2300</h1>
        </div>
        
       
        {/* table */}
      </div>
      <div className=" min-h-[80vh]">
        <img className="w-full h-[350px]" src={offer} alt="" />
        <CartSlider></CartSlider>

      </div>
    </div>
  );
};

export default Cart;
