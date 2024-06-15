import imgK from "../../assets/tyler-nix-6UEyVsw_1lU-unsplash.jpg"

const bigImg = () => {
    return (
        <div className="text-center mt-8 space-y-5">
            <h1 className="text-[35px]">With a masterful touch</h1>
           <div className="w-full md:w-[70%] lg:w-[60%] m-auto text-center">
           <p className="text-[16px]">Innovative materials seamlessly intertwine, while the design effortlessly disrupts traditional norms. In the Faubourg, men's bracelets and rings are free to redefine elegance.</p>
           </div>
            <div className="w-full md:w-[80%] lg:w-[80%] m-auto">
                <img className="w-full h-full bg-fixed" src={imgK} alt="" />


            </div>
        </div>
    );
};

export default bigImg;