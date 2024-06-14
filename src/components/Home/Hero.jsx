import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slide1 from "../../assets/slide01.jpg"
import slide2 from "../../assets/slide02.jpg"
import slide3 from "../../assets/slide03.jpg"
const Hero = () => {
    return (
        <AwesomeSlider className='h-[740px]'>
   <div
      className="bg-cover bg-center w-full h-full"
      style={{ backgroundImage: `url(${slide1})`}}
    >
      {/* Your content here */}
    </div>
   <div
      className="bg-cover bg-center w-full h-full"
      style={{ backgroundImage: `url(${slide2})`}}
    >
      {/* Your content here */}
    </div>
   <div
      className="bg-cover bg-center w-full h-full"
      style={{ backgroundImage: `url(${slide3})`}}
    >
      {/* Your content here */}
    </div>
   
 
  </AwesomeSlider>
    );
};

export default Hero;