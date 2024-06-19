import { useForm } from "react-hook-form";
import UserSingleData from "../Hook/UserSingleData";
import useAxiosPublic from "../Hook/useAxiosPublic";

import { useContext, } from "react";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Authentication/AuthProvider";



const imgbb_key = import.meta.env.VITE_IMGBB_KEY

const imgbb_Api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`

const UpdateProfile = () => {
  const {person} = useContext(AuthContext)
  const [userSingleData, isloading] = UserSingleData();

 
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    console.log(data)
    const imgFile = {image : data.image[0]}

    const res = await axiosPublic.post(imgbb_Api, imgFile,{
      headers : {
        'content-type' : 'multipart/form-data'
      }
    })

    console.log(res.data.data.display_url)
    if(res.data.status){
      const dataUpdate = {
        name : data?.name,
        image : res?.data.data.display_url
      }
      mutationUp.mutate(dataUpdate)
    }else{
      toast.error("Something went wrong !")
    }




  };

  const mutationUp = useMutation({
    mutationFn : async(dataUpdate)=>{
      const res = await axiosSecure.patch(`/userDataUpdate/${person?.email}`,dataUpdate )
      return res.data
    },
    
    onSuccess : ()=>{
      toast.success("Data Is Up To Date !")
    }

  })
  return (
    <div>
      <h1 className="text-[25px] py-5 uppercase  font-[500] text-center">
        Hey {userSingleData?.name} You Want To Change Data? <br /> Fill Up The
        Form !
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex px-5 z-1">
      <div className="relative flex flex-1 p-4 w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased uppercase">
      UpDate Now
    </h3>
    <Toaster></Toaster>
  </div>
  <div className="flex flex-col gap-4 p-6">
    
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        placeholder=""
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        {...register("name", { required: true })}
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Name
      </label>
      {errors.name && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="-ml-2.5">

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
        {errors.image && <span className="text-red-500">This field is required</span>}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
     
    </div>
    {/*  */}
    {/*  */}
    {/* {
      img !== "" ? <img src={img} className="w-[100px] h-[120px]" alt="" /> : ''
    } */}
    {/*  */}
    {/*  */}
  </div>
  <div className="p-6 pt-0">
    <button
      data-ripple-light="true"
      type="submit"
      className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      UpDate Now !
    </button>
    
  </div>
</div>

        
      </form>
    </div>
  );
};

export default UpdateProfile;
