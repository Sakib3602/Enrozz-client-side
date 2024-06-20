import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
const Products = () => {
  const params = useParams();
  // console.log(params);
  const [asc, SetAsc] = useState(true);
  const [search, setSearch] = useState("");

  const axiosPublic = useAxiosPublic();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", asc, search],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?sort=${asc}&search=${search}`
      );
      return res.data;
    },
  });

  console.log(products);

  function handleSearch(e) {
    e.preventDefault();

    console.log(e.target.sea.value)
    setSearch(e.target.sea.value);
  }

  const finalData = products?.filter((px) => px?.category === params?.category);

  return (
    <>
      <div className="w-full min-h-[55px] flex space-x-2  md:space-x-4 lg:space-x-4 item-center p-2 md:px-8 lg:px-8 mt-2 shadow-xl bg-white ">
        <label>
          <button
            onClick={() => SetAsc(!asc)}
            className="cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition border"
          >
            {asc ? "High To Low Price" : "Low to High Price"}
          </button>
        </label>


        <div>
          <form onSubmit={handleSearch}>
            <input type="text " name="sea" className="grow h-[45px] border focus:border-pink-450 px-4" placeholder="Search Now..." />
            <input type="submit"  className="h-[45px] rounded-bl-sm rounded-tr-sm w-[70px] bg-blue-950 text-white" value="Search" />
          </form>
        </div>
      </div>




      {isLoading && <Loader></Loader>}
      <div className="mt-10 w-[95%] md:w-[50%] lg:w-[40%] m-auto">
        <h1 className="uppercase text-[50px]  font-[700] text-center">
          <span className="line-through">{params?.category}</span>{" "}
          <span className="line-through"> PRoducts</span>
        </h1>
        <p className="text-center">
          Discover our diverse range of innovative products designed to enhance
          everyday life with quality, style, and functionality. Explore now!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[95%] lg:w-[80%] m-auto gap-10">
        {finalData?.map((p) => (
          <Link to={`/productsDetails/${p?._id}`} key={p?._id}>
            <ProductCard p={p}></ProductCard>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
