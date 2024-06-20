import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
const DashBord = () => {


  
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-[95%] bg-[#F5F5F5] md:w-[90%]  m-auto">
      {/* for sm and md device */}

      <div className="flex md:flex lg:hidden w-full h-[80px]  ">
      <div className="flex">
      <div className="drawer block p-5 w-[80px] ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" fixed  bg-white text-[28px] text-black p-2 border rounded-xl drawer-button">
           <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 block md:block lg:hidden">
      <Link to={"/"}>
              <a className="cursor-pointer text-3xl font-[700]">
                <span className="text-[#D2649A] text-[50px]">E</span>
                <span className="animate-pulse">NROZZ</span>
                <span className="text-[#D2649A] text-[50px]">Z</span>
              </a>
            </Link>
      </div>
      </div>
   

      </div>
      
      {/* for sm and md device */}


    {/* for lg screen only */}

    <div className="  flex">
        <div className="w-[35%] hidden md:hidden lg:block h-screen border bg-[#006666] ">
            <h1 className="text-white font-[600] text-[43px] text-center mt-4">EnrozzZ</h1>
            <hr className="bg-white w-[85%] m-auto mt-3" />

            <div>
                <ul className="text-white text-[20px] text-start ml-8 space-y-5 list-none">

                <li  className="mt-10">
                        <Link className="flex space-y-10 items-center" to={""}>
                        <IoPerson className="mr-2"></IoPerson>
                        My Profile</Link>
                    </li>
                <li  className="mt-10">
                        <Link className="flex space-y-10 items-center" to={"updateUserProfile"}>
                        <GrUpdate className="mr-2"></GrUpdate>
                        UpDate Profile</Link>
                    </li>
                <li  className="mt-10">
                        <Link className="flex space-y-10 items-center" to={"fullReview"}>
                        <MdOutlineRateReview className="mr-2"></MdOutlineRateReview>
                        Review Our Sevice</Link>
                    </li>
                   
                    <div className=" h-2 w-[90%] pt-1">
                      <hr />
                    </div>

                    <li  >
                        <Link className="flex space-y-10 items-center" to={"/"}>
                        <FaHome className="mr-2"></FaHome>
                        Home</Link>
                    </li>
                    <li className="flex space-x-3">
                    <Link className="flex space-y-10 items-center" to={"/cart"}>
                        <FaShoppingCart className="mr-2"></FaShoppingCart>
                        My Cart</Link>
                    </li>
                
                </ul>
            </div>

        </div>

         {/*  */}
         <div className="w-full ">
        <Outlet></Outlet>
        </div>
        {/*  */}

       
    </div>
    {/* for lg screen only */}
    </div>
    </div>
  );
};

export default DashBord;
