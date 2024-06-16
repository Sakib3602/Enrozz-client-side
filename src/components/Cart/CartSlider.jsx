import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';



// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

const CartSlider = () => {
    return (
        <div>
            <Swiper
        direction={'vertical'}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper h-[280px] border"
      >
        <SwiperSlide>
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1713637893326-2557da59335a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1564463836257-f028d0ff4446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full' src="https://images.unsplash.com/photo-1510678960173-b52e15cbcfb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default CartSlider;