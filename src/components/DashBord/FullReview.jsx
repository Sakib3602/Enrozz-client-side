import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import UserSingleData from "../Hook/UserSingleData";
import moment from "moment/moment";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { BsX } from "react-icons/bs";

const FullReview = () => {
    const {person} = useContext(AuthContext)
    const [userSingleData,isloading] = UserSingleData()
    const axiosSecure = useAxiosSecure()


    function HandleReview(e){
        e.preventDefault()

        let text = e.target.cover_letter.value
        if(text.length < 40) {
          return toast.error("Review must be more than 40 characters")
        }

        let dateee = moment().format('YYYY-MM-DDTHH:mm:ss');
        console.log(dateee, "dateee");
    
        // Parse the formatted date string with the Date constructor
        const date = new Date(dateee);
        
        // Get the time in milliseconds since the Unix epoch
        const milliseconds = date.getTime();
        console.log(milliseconds, "milliseconds");

        const reviewData = {
          name : userSingleData?.name,
          image : userSingleData?.image,
          text,
          time : moment().format('MMMM Do YYYY, h:mm:ss a'),
          milliseconds 


        }
        console.log(text.length)
   
          mutationUo.mutate(reviewData)
          
        
        

    }

   

    const mutationUo = useMutation({
      mutationFn : async(reviewData)=>{
        const res = await axiosSecure.post('/reviews',reviewData)
        return res.data
      },
      onSuccess: ()=>{
        toast.success("Thank you for your feedback.")
      }
    })












  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Review Us.
    </h2>
    <form onSubmit={HandleReview} className="flex flex-col">
      <input
        type="text"
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        value={userSingleData?.name}
      />
      <Toaster></Toaster>
      <input
        type="email"
        
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        value={userSingleData?.email}
      />
      
     
      <textarea
        name="cover_letter"
        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        placeholder="Cover Letter"
        defaultValue={""}
        
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    </div>
  );
};

export default FullReview;
