import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
const Products = () => {
  const params = useParams();
  console.log(params);

  const axiosPublic = useAxiosPublic()


  const {data : products = []} = useQuery({
      queryKey: ["products"],
      queryFn: async()=>{
          const res = await axiosPublic.get("/products")
          return res.data
      }
  })

//   console.log(products)

  const finalData = products.filter(px => px?.category === params.category)

  console.log(finalData)
  return (
    <>
      <div className="w-full min-h-[55px] flex space-x-2  md:space-x-4 lg:space-x-4 item-center p-2 md:px-8 lg:px-8 mt-2 shadow-xl bg-white ">
        <select className="select select-bordered w-[80%]  md:w-[150px] lg:w-[150px] max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Normal Apple</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </select>

        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search Now..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[95%] lg:w-[80%] m-auto gap-10">
    
    {
        finalData?.map((p)=> <ProductCard key={p?._id}></ProductCard>)
    }
        
      </div>
    </>
  );
};

export default Products;
