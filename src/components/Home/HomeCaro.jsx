import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode,} from "swiper/modules";
import { useEffect, useState } from "react";



const HomeCaro = () => {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("fake.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
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
            data?.slice(1,6).map(d => <SwiperSlide key={d?.description} className="">
                <div className="card">
                  <div className="image">
                    <img className="h-[240px] md:h-[240px] lg:h-[430px] w-full" src={d?.image} alt="" />
                  </div>
                  <span className="title">{d?.title}</span>
                  <span className="price">${d?.price}</span>
                </div>
              </SwiperSlide>)
        }

        
      </Swiper>
    </div>
  );
};

export default HomeCaro;
