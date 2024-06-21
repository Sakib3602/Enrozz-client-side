import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useState } from "react";

const BuyForm = () => {

    const axisSecure = useAxiosSecure()
 

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {

        console.log(data)

        const buyData = {
            price:1334,
            product_name : "mandatory",
            name: data.name,
            email: data.email,
            phone: data.number,
            address: data.address,
            deleveryPlace: data.deleveryPlace,
            country: "Bangladesh",
          
          };
          mutationUp.mutate(buyData)

        
      }


      const mutationUp = useMutation({
        mutationFn : async(buyData)=>{
            const res = await axisSecure.post('/create-payment', buyData)
            // setU(res)
            return res.data
          
        },
        onSuccess : (data)=>{
            const redirectUrl = data.paymentUrl

            if(redirectUrl){
                window.location.replace(redirectUrl)
                
            }
        }
      })
     




  return (
    <div className="w-[95%] md:w-[70%] md:h-[50vh] lg:w-[50%] lg:h-[50vh] m-auto mt-10 ">
      <form onSubmit={handleSubmit(onSubmit)} className="px-7 border shadow-xl p-5 lg:p-10 md:p-10  m-auto  mt-10 grid ">
        <div className="grid gap-6" id="form">
          <div className="w-full flex gap-3">
            <input
              className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
              type="text"
              placeholder="Your Name"
              id="First-Name"
              name="name"
              required
              {...register("name", { required: true })}
            />
           
           <input
              className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="email"
              placeholder="Your Email"
              id="Last-Name"
              name="email"
              required
              {...register("email", { required: true })}
              />
          </div>
          <div className="w-full flex gap-3">
            <input
              className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
              type="text"
              placeholder="Your Address"
              id="First-Name"
              name="address"
              required
              {...register("address", { required: true })}
              />
            
            <input
              className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="number"
              placeholder="Your Phone Number"
              id="Last-Name"
              name="number"
              required
              {...register("number", { required: true })}
              />
            
          </div>
          <div className="w-full flex gap-3">
            <input
              className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
              type="text"
              placeholder="Detail Delevary Place"
              id="First-Name"
              name="deleveryPlace"
              required
              {...register("deleveryPlace", { required: true })}
              />
            
            <input
              className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="text"
              placeholder="Your Phone Number"
              id="Last-Name"
              value={"Bangladesh"}
            />
          </div>
          {/*  */}
          {/* <div className="grid gap-6 w-full">
      <input
        className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
        type="text"
        placeholder="Your Address"
        id="Email"
        name="address"
      />
      <input
        className="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]"
        type="date"
        required=""
      />
    </div> */}

          <button
            className="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
