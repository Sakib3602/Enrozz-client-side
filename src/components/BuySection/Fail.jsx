import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div className="w-[95%]  md:w-[60%] lg:w-[ flex flex-col items-center text-center m-auto mt-20">
      <h1 className="text-[54px] font-[600]">Payment Fail!</h1>
      <div className="md:w-full lg:w-[70%] m-auto mt-5">
        <p className="text-center">
          We're sorry, but your payment has failed. Please check your payment
          details and try again. If you need assistance, our support team is
          here to help. Thank you for your patience and for choosing us!
        </p>
      </div>
      <Link to={"/"}>
        <button className="ui-btn mt-10">
          <span>Keep Shoping</span>
        </button>
      </Link>
    </div>
  );
};

export default Fail;
