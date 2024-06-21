import { Link } from "react-router-dom";


const Cancel = () => {
    return (
        <div className="w-[95%] md:w-[60%] lg:w-[60%] flex flex-col items-center text-center m-auto mt-20">
      <h1 className="text-[54px] font-[600]">Payment Cancel</h1>
      <div className="md:w-full lg:w-[70%] m-auto mt-5">
        <p className="text-center">
        We're sorry to see your payment was canceled. If you need assistance or have any questions, please contact our support team. We're here to help and ensure a smooth shopping experience. Thank you for considering us!
        </p>
      </div>
      <Link to={"/"}>
      <button className="ui-btn mt-10">
        <span>Try Agin</span>
      </button>
      </Link>
    </div>
    );
};

export default Cancel;