import { FaStar } from "react-icons/fa";
import ThumSlider from "../Home/ThumSlider/ThumSlider";


const AllDetails = ({data}) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 h-[50px]">
      <div className="p-3 md:p-10 lg:p-14">
        <ThumSlider data={data}></ThumSlider>
      </div>
      <div className="p-3 md:p-10 lg:p-10 space-y-5">
        <h1 className="text-[50px] font-[700]">{data?.title}</h1>
        <h1 className="text-[20px] font-[400] flex items-center ">
          {" "}
          <span className="text-orange-500 mr-2">
            <FaStar></FaStar>
          </span>{" "}
          {data?.ratings}
        </h1>
        <h1 className="text-[20px] font-[400]">
          Starts From{" "}
          <span className="text-[30px] font-[700] text-[#E44A7A]">
            {" "}
            ${data?.price} - ${data?.price + 400}
          </span>
        </h1>
        <p className="text-[18px] font-[400] text-gray-600">
          {data?.description}
        </p>
        <div>
          <h1 className="flex space-x-5">
            Available Size :{" "}
            {data?.size?.map((m) => (
              <p key={m}>{m} </p>
            ))}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="border">
                  <th className="border">Size</th>
                  <th className="border"></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="border">S</td>
                  <td className="border">30'</td>
                </tr>
                <tr>
                  <td className="border">M</td>
                  <td className="border">40'-50'</td>
                </tr>
                <tr>
                  <td className="border">L</td>
                  <td className="border">50'-70'</td>
                </tr>
                <tr>
                  <td className="border">XL</td>
                  <td className="border">70'-80'</td>
                </tr>
                <tr>
                  <td className="border">XLL</td>
                  <td className="border">80'-100'</td>
                </tr>
                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="text-[28px]">
          Category : <span className="text-orange-500">{data?.category}</span>
        </h1>

        <h1>
          Only <span className="text-red-600 text-[22px]">{data?.stock}</span>{" "}
          are Available.
        </h1>

        <div>
          <h1 className="text-[16px] mb-2">Chosse Color :</h1>
          <select className="select select-ghost w-full h-[60px] shadow-2xl">
            <option disabled selected>
              Pick Your Color
            </option>
            <option value={"Red"}>Red</option>
            <option value={"Black"}>Black</option>
            <option value={"Green"}>Green</option>
          </select>
        </div>
        {/*  */}
        <div>
          <h1 className="text-[16px] mb-2">Chosse Size :</h1>
          <select className="select select-ghost w-full h-[60px] shadow-2xl">
            <option disabled selected>
              Your Size
            </option>
            {data?.size?.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/*  */}
        <div>
          <h1 className="hidden lg:flex  md:hidden space-x-5">
            Tags :{" "}
            {data?.tags?.map((t) => (
              <div key={data?._id} className="badge badge-success gap-2 p-3">
                
                {t}
              </div>
            ))}
          </h1>
        </div>

        {/*  */}
        <a
  href="#_"
  className="w-full mt-5 h-[60px] relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
>
  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
    ADD TO CART
  </span>
  <span className="relative invisible">Button Text</span>
</a>

        {/*  */}
        {/*  */}
        <a
  href="#_"
  className=" w-full h-[90px] relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-blue-50 group"
>
  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full" />
  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    <svg
      className="w-5 h-5 text-green-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    <svg
      className="w-10 h-10 text-green-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </span>
  <span className="relative w-full text-center text-[22px] transition-colors duration-200 ease-in-out group-hover:text-white">
    Buy Now
  </span>
</a>

        {/*  */}
      </div>
    </div>
    );
};

export default AllDetails;