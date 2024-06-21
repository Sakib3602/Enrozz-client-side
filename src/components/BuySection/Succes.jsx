import { Link } from "react-router-dom";

const Succes = () => {
  return (
    <div className="w-[95%] md:w-[60%] lg:w-[ flex flex-col items-center text-center m-auto mt-20">
      <h1 className="text-[54px] font-[600]">Payment Successful</h1>
      <div className="md:w-full lg:w-[70%] m-auto mt-5">
        <p className="text-center">
          Thank you for choosing us for your clothing needs! We truly appreciate
          your purchase and trust in our brand. Your satisfaction is our
          priority, and we look forward to serving you again. Enjoy your new
          clothes!
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

export default Succes;
