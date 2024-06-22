import { useContext, useState } from "react";
import Table from "./Table";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loader from "../Loader/Loader";
import offer from "../../assets/60_-off-web.png";
import CartSlider from "./CartSlider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { person } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cartTable"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cartTable/${person?.email}`);
      return res.data;
    },
  });

  console.log(data, "tabel");

  const val = data?.reduce((accumulator, currentValue) => {
    return parseInt(accumulator + currentValue?.price);
  }, 0);

  const valTotal = val + 50 + 18;

  if (isLoading) {
    return <Loader></Loader>;
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

              {data?.length > 0
                ? data?.map((t) => (
                    <Table refetch={refetch} key={t?._id} t={t}></Table>
                  ))
                : ""}

              {/* row 2 */}
            </tbody>
            {/* foot */}
          </table>
        </div>

        <div className="divider"></div>

        <div className="flex justify-between px-8  text-[18px] font-[600] mb-5">
          <h1>Tax</h1>
          <h1>$18 </h1>
        </div>
        <div className="flex justify-between px-8 text-[18px] font-[600] mb-5">
          <h1>Shipping Charge</h1>
          <h1>$50</h1>
        </div>
        <div className="divider"></div>

        <div className="flex justify-between px-8 text-[18px] font-[600] mb-5">
          <h1>Total Price</h1>
          <h1>${valTotal}</h1>

          {/*  */}

          {/*  */}
        </div>
        <Link to={'/buyform'}>

        <button className="overflow-hidden mb-10 relative w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
          Buy Now
          
        </button>
        
        </Link>
       

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
