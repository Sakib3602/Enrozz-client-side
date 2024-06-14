import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import slide1 from "../../assets/slide01.jpg"
import slide2 from "../../assets/slide02.jpg"
import slide3 from "../../assets/slide03.jpg"
const Hero = () => {
    return (
        <AwesomeSlider

       
         className='
         h-[350px]
         md:h-[500px] lg:h-[740px] '>
   <div
        className="bg-cover bg-center w-full h-full p-5 md:p-[80px] lg:p-[130px] "
        style={{ backgroundImage: `url(${slide1})` }}
      >
        <h1 className="p-4 rounded-2xl w-full  text-[20px] text-white">For Eid, </h1>
        <h1 className='text-[50px] md:text-[80px] lg:text-[120px] font-[700]'><span className='text-[#E44A7A] '>Women's </span>  <br />Collections</h1>
        <button className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
  Explore Now
</button>

      </div>
   <div
        className="bg-cover bg-center w-full h-full p-5 md:p-[80px]  lg:p-[130px] r"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <h1 className="p-4 rounded-2xl w-full  text-[20px] text-white">For Eid, </h1>
        <h1 className='text-[50px] md:text-[80px] lg:text-[120px] font-[700]'><span className='text-blue-900 '>Man's </span>  <br />Collections</h1>
        <button className="px-8 z-30 py-4 bg-blue-900 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_blue-900] hover:[text-shadow:2px_2px_2px_blue-900] text-2xl">
  Explore Now
</button>

      </div>
 
      <div
        className="bg-cover bg-center w-full h-full p-5 md:p-[80px] lg:p-[130px] r"
        style={{ backgroundImage: `url(${slide3})` }}
      >
        <h1 className="p-4 rounded-2xl w-full  text-[20px] text-white">For Eid, </h1>
        <h1 className='text-[50px] md:text-[80px] lg:text-[120px] font-[700]'><span className='text-[#E44A7A] '>Baby's </span>  <br />Collections</h1>
        <button className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl">
  Explore Now
</button>

      </div>
   
 
  </AwesomeSlider>
    );
};

export default Hero;