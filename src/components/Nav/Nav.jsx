import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  return (
    <>
      <div className="border text-center mb-1 text-white font-[600] py-2 bg-[#3E0A30]">
        <h1>50% Flash off</h1>
      </div>
      <div className="h-[120px] bg-[#FFFFFF] px-6 shadow-md border ">
        <div className="navbar mt-6  bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
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
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <details>
                    <summary>Categoties</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <Badge badgeContent={5} className="border  border-solid boder-[2px] border-[#3E0A30]" color="primary">
                    <ShoppingCartIcon color="action" />
                  </Badge>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
