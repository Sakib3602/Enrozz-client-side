
import imgll from "../../assets/tyler-nix-6UEyVsw_1lU-unsplash.jpg"


const ProductCard = () => {
   






    return (
        <div className="relative  group cursor-pointer overflow-hidden duration-500 w-[340px]  h-[520px] bg-gray-200 shadow-xl text-gray-50 p-2">
        <div className="">
            <div className=" w-full h-[450px] bg-blue-400 duration-500">
                <img className="h-full w-full" src={imgll} alt="" />

            </div>
          
          <div className="absolute w-full left-0 p-5 -bottom-10 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10  left-0 w-full h-28 opacity-0 duration-500 group-hover:opacity-80 group-hover:bg-blue-400 group-hover:rounded" />
            <span className="text-xl text-black font-bold">View Details!</span>
            <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                    <button className="btn btn-wide ">View</button>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default ProductCard;


