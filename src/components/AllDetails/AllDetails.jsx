import { FaStar } from "react-icons/fa";
import ThumSlider from "../Home/ThumSlider/ThumSlider";
import Loader from "../Loader/Loader";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AllDetails = ({ data, isLoading }) => {
  const { person, } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  
  

  const handleCart = (e) => {
    e.preventDefault();

    if(!person){
      navigate("/joinUs")
      return toast.error('Please Login First')
    }
    const color = e.target.color.value;
    const size = e.target.size.value;

    const cartData = {
      color,
      size,
      email: person.email,
      title: data.title,
      image: data.image,
      price: data.price,
    
      

    };
    console.log(cartData, "fron");
    mutationUp.mutate(cartData);
  };


  const mutationUp = useMutation({
    mutationFn : async(cartData)=>{
      const res = await axiosPublic.post('/carts', cartData)
      return res.data

    },
    onSuccess: ()=>{
      navigate("/cart")
      toast.success('Added To Cart!')
      

    }
  })

















  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 h-[50px]">
      <div className="p-3 md:p-10 lg:p-14">
        <ThumSlider data={data}></ThumSlider>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </div>
      <div className="p-3 md:p-10 lg:p-10 space-y-5">
        <h1 className="text-[50px] font-[700]">{data?.title}</h1>
        <h1 className="text-[20px] font-[400] flex items-center ">
          {" "}
          <span className="text-orange-500 mr-2">
            <FaStar></FaStar>
          </span>{" "}
          {data?.ratings}
        </h1>
        <h1 className="text-[20px] font-[400]">
          Starts From{" "}
          <span className="text-[30px] font-[700] text-[#E44A7A]">
            {" "}
            ${data?.price} - ${data?.price + 400}
          </span>
        </h1>
        <p className="text-[18px] font-[400] text-gray-600">
          {data?.description}
        </p>
        <div>
          <h1 className="flex space-x-5">
            Available Size :{" "}
            {data?.size?.map((m) => (
              <p key={m}>{m} </p>
            ))}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border">
                  <th className="border">Size</th>
                  <th className="border"></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="border">S</td>
                  <td className="border">30'</td>
                </tr>
                <tr>
                  <td className="border">M</td>
                  <td className="border">40'-50'</td>
                </tr>
                <tr>
                  <td className="border">L</td>
                  <td className="border">50'-70'</td>
                </tr>
                <tr>
                  <td className="border">XL</td>
                  <td className="border">70'-80'</td>
                </tr>
                <tr>
                  <td className="border">XLL</td>
                  <td className="border">80'-100'</td>
                </tr>
                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="text-[28px]">
          Category :{" "}
          <span className="text-orange-500 uppercase">
            {data?.category} Cloth
          </span>
        </h1>

        <h1>
          Only <span className="text-red-600 text-[22px]">{data?.stock}</span>{" "}
          are Available.
        </h1>

        <form onSubmit={handleCart}>
          <div>
            <h1 className="text-[16px] mb-2">Choose Color :</h1>
            <select
              name="color"
              className="select select-ghost w-full h-[60px] shadow-2xl"
            >
              <option disabled selected>
                Pick Your Color
              </option>
              <option value="Red">Red</option>
              <option value="Black">Black</option>
              <option value="Green">Green</option>
            </select>
          </div>

          <div>
            <h1 className="text-[16px] mb-2">Choose Size :</h1>
            <select
              name="size"
              className="select select-ghost w-full h-[60px] shadow-2xl"
            >
              <option disabled selected>
                Your Size
              </option>
              {data?.size?.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1 className="hidden mt-5 lg:flex md:hidden space-x-5">
              Tags :{" "}
              {data?.tags?.map((t) => (
                <div key={t} className="badge badge-success gap-2 p-3">
                  {t}
                </div>
              ))}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-center mt-8 space-y-5 lg:space-y-0 md:space-y-0 md:space-x-4 lg:space-x-4">


          <input
              type="submit"
              className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
              value="Add To Cart"
            />
            <Link to={"/buyform"}>
            <button

              type="button"
              className="bg-white border border-[#4ADE80] text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
            >
              <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  />
                  <path
                    fill="#000000"
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  />
                </svg>
              </div>
              <p className="translate-x-2">Buy Now</p>
            </button>
            
            </Link>
            
          </div>
        </form>

        {/*  */}
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default AllDetails;
