import Loader from "../../Loader/Loader";
import { FaCarAlt } from "react-icons/fa";

const OrderTable = ({ o, isLoading, i }) => {
  if (isLoading) return <Loader></Loader>;
  return (
    <tr className="hover:bg-base-200">
      <th>{i + 1}</th>
      <td>{o?.product}</td>
      <td>p{o?.deleveryPlace}</td>
      <td>{o?.phone}</td>

      <td>{o?.tranId}</td>

      <td>
        <button className="font-[600] p-2  bg-orange-600 text-white">
            {
                o?.payment === "success" ? "Delever Now" : 'Delete'
            }
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;
