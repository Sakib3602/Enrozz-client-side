



const ProductCard = ({p}) => {
   






    return (
        <div  className="relative  group cursor-pointer overflow-hidden duration-500 w-[340px]  h-[520px] bg-black rounded-xl shadow-xl text-gray-50 p-2">
        <div className="">
            <div className=" w-full h-[460px] bg-blue-400 duration-500">
                <img className="h-full w-full" src={p?.image} alt="" />

            </div>
          
          <div className="absolute w-full left-0 p-5 -bottom-10 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10  left-0 w-full h-28 opacity-0 duration-500 group-hover:opacity-80 group-hover:bg-black group-hover:rounded" />
            <div className="flex flex-col ">
            <span className="text-xl text-White font-bold">{p?.title}   </span>
           
            </div>
            <div className="group-hover:opacity-100 w-56 duration-500 opacity-0">
            <h1>Price : ${p?.price}</h1>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default ProductCard;


