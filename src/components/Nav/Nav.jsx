import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hook/useAxiosPublic";

const Nav = () => {
  const { person , logOut} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  console.log(person, "from nav");

  function handleLogOut(){
    console.log("clicked")
    logOut()
    .then(()=>{
      toast.success('Loged Out.')

    })
   
  }

  const {data: cartlength = [],refetch} = useQuery({
  queryKey : ["cartLength"],
  queryFn: async () => {
    const res = await axiosPublic.get(`/length/${person?.email || ""}`);
    return res.data;
  },
  })
  // console.log(cartlength.cartLength)

  return (
    <>
      <div className="border text-center mb-1 text-white font-[600] py-2 bg-[#3E0A30]">
        <h1 className="animate-bounce">FLAT 60% DISCOUNT ON EVERYTHING !!</h1>
      </div>
      <div className="h-[110px] bg-[#FFFFFF] px-6 shadow-md  ">
        <div className="navbar mt-6  bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
            <Toaster/>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu min-h-[230px] w-[300px] space-y-2 menu-sm z-10 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
              >
               <Link to={"/"}>
                  <li>
                    <a>Home</a>
                  </li>
                </Link>
                <li className="z-10 ">
                  <details className="">
                    <summary>Categoties</summary>
                    <ul className="p-2 w-[200px]">
                      <li>
                        <a>Man</a>
                      </li>
                      <li>
                        <a>Women</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Contact</a>
                </li>
               <Link to={"/cart"}>
               <li>
                 <h3>Carts (0)</h3>
                </li></Link>

                {
                  person ? <button onClick={handleLogOut} className="group  flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                  <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                  </div>
                  <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Logout
                  </div>
                </button> : <Link to={"JoinUs"}>
                    <li>
                      <a>Join Us</a>
                    </li>
                  </Link>
                }

                
              </ul>
            </div>
            <Link to={"/"}>
              <a className="cursor-pointer text-3xl font-[700]">
                <span className="text-[#D2649A] text-[50px]">E</span>
                <span className="animate-pulse">NROZZ</span>
                <span className="text-[#D2649A] text-[50px]">Z</span>
              </a>
            </Link>
          </div>

          <div className="navbar-end flex-1">
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Link to={"/"}>


                  <li>
                    <a>Home</a>
                  </li>
                </Link>
                <li className="z-10 ">
                  <details className="">
                    <summary>Categoties</summary>
                    <ul className="p-2 w-[200px]">
                    <Link to={"/products/men"}>
                      <li>
                        <a>Man</a>
                      </li></Link>

                      <Link to={"/products/women"}>
                      <li>
                        <a>Women</a>
                      </li></Link>
                     
                      
                      
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Contact</a>
                </li>

                {
                  person ? <button onClick={handleLogOut} className="group  flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1">
                  <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>
                  </div>
                  <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Logout
                  </div>
                </button> : <Link to={"JoinUs"}>
                    <li>
                      <a>Join Us</a>
                    </li>
                  </Link>
                }
                

                <Link to={"/cart"}>
                <li>
                  <Badge
                    badgeContent={person ? cartlength?.cartLength : "0"  }
                    className="border ml-1  border-solid boder-[2px] border-[#3E0A30]"
                    color="primary"
                  >
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </li>
                
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
