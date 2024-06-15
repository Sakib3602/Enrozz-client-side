import img1 from "../../assets/Sultan-4.jpg";
import img2 from "../../assets/premium_photo-1679440415393-c4afdd6bd729.jpg";
import img3 from "../../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import img4 from "../../assets/jade-aucamp-Kj6LgGceZ4M-unsplash.jpg";

const GridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:h-screen lg:h-screen mt-14 overflow-hidden">
      <div
        className="bg-cover bg-center w-full h-full object-cover   transition duration-300 ease-linear transform hover:scale-110 overflow-hidden  hover:z-10"
        style={{ backgroundImage: `url(${img4})` }}
      >
        <h1 className="hover:underline text-center text-white font-[700] text-[20px] mt-[60%]">Mans Products</h1>
    
      </div>

      <div className=" grid grid-rows-2">
        <div
          className="bg-cover bg-center w-full h-full  object-cover   transition duration-300 ease-linear transform hover:scale-110 overflow-hidden hover:z-10"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <h1 className="hover:underline text-center text-white font-[700] text-[20px] mt-[30%]">
            T-Shirts
          </h1>
        </div>
        <div
          className="bg-cover bg-center w-full h-full object-cover   transition duration-300 ease-linear transform hover:scale-110 overflow-hidden hover:z-10"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <h1 className="hover:underline text-center text-white font-[700] text-[20px] mt-[30%]">
            All Casual
          </h1>
        </div>
      </div>

      <div
        className="bg-cover bg-center w-full h-full  object-cover   transition duration-300 ease-linear transform hover:scale-110 overflow-hidden hover:z-10"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <h1 className="hover:underline text-center text-white font-[700] text-[20px] mt-[60%]">
          Womens Products
        </h1>
      </div>
    </div>
  );
};

export default GridSection;
