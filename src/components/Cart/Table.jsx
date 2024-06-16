

const Table = ({t}) => {
    return (
       <>
       <tr className="">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={t?.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{t?.title}</div>
            </div>
          </div>
        </td>
        <td>
         {t?.price}
        </td>
        <td>{t?.color === "Pick Your Color" ? "Not Choice" : t?.color}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
      
       </>
      
    );
};

export default Table;


