import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode,} from "swiper/modules";

import useSliderData from "../Hook/useSliderData";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";



const HomeCaro = () => {

   
    const [sliderData, isLoading] = useSliderData()
   

    if(isLoading){
      return <Loader></Loader>
    }
  return (
    <div className="w-full md:w-[95%] lg:w-[95%] m-auto mt-10">
      <Swiper
          breakpoints={{
            440: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        freeMode={true}
        
        x
        modules={[Autoplay, FreeMode, ]}
        className=" mySwiper  h-[300px] md:h-[300px] lg:h-[500px]"
      >

        {
            sliderData?.slice(1,8).map(d =>  <SwiperSlide  key={d?._id}  className="">
              <Link to={`/caroDetail/${d?._id}`} >
              <div className="card">
                <div className="image">
                  <img className="h-[240px] md:h-[240px] lg:h-[430px] w-full" src={d?.image} alt="" />
                </div>
                <span className="title">{d?.title}</span>
                <span className="price">${d?.price}</span>
              </div>
              </Link>
            </SwiperSlide> )
        }
 
        
      </Swiper>
      <div>
      
      </div>
    </div>
  );
};

export default HomeCaro;
