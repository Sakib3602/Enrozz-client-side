import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const DashBord = () => {
  return (
    <div>
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
    </div>
  );
};

export default DashBord;
