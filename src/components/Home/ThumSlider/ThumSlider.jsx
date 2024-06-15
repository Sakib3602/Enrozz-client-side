
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ThumSlider = ({data}) => {

 
        return (
            <Carousel>
                <div className="md:p-10 lg:p-10">
                    <img className=" w-full" src={data?.image} />
                    
                </div>
                <div>
                    <img src={"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNDEwLTEwLWJfMS5qcGc.jpg"} />
                    
                </div>
                <div>
                    <img src={"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNDEwLTEwLWJfMS5qcGc.jpg"} />
                    
                </div>
                
            </Carousel>
        );
    
};

export default ThumSlider;