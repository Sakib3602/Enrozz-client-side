import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import UserSingleData from "../Hook/UserSingleData";

const FullReview = () => {
    const {person} = useContext(AuthContext)
    const [userSingleData,isloading] = UserSingleData()


    function HandleReview(e){
        e.preventDefault()

        const text = e.target.cover_letter.value
        

    }
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
