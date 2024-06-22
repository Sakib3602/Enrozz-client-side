import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const Orderdata = () => {
    const axiosSecure = useAxiosSecure()
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ["ordersAllAdmin"],
        queryFn: async () => {
          const res = await axiosSecure.get("/ordersAllForAdmin");
          return res.data;
        },
    })
      console.log(orders);
    
      const filterOrderBySuccess = orders.filter((f) => f?.payment === "success");
      const filterOrderByPending = orders.filter((f) => f?.payment === "pending");

      const totalAmount = filterOrderBySuccess.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    console.log(totalAmount,"total amount")
      return [filterOrderBySuccess,filterOrderByPending,totalAmount]
};

export default Orderdata;