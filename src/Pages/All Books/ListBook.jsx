/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ListBook = ({ book }) => {
  const { _id: id, bookName, bookImage, author, category, quantity } = book;

  return (
    <>
      <tbody>
        {/* body */}
        <tr>
          <td className="min-w-36">
            <div className=" lg:flex items-center gap-5">
              <div className="">
                <div className="mb-1.5">
                  <img src={bookImage} className="h-32" />
                </div>
              </div>
              <div></div>
            </div>
          </td>

          <td className="pl-7">
            <div className="font-semibold text-lg">{bookName}</div>
          </td>
          <td className="pl-7">
            <div className="font-semibold text-lg">{author}</div>
          </td>

          <td className="pl-7">
            <div className="font-semibold text-lg">{category}</div>
          </td>
          <td className="pl-7 font-semibold text-lg">{quantity}</td>

          <th>
            {/* button */}
            <Link to={`/updateBook/${id}`} className="mt-5">
              <button className="btn rounded-xl bg-[#f66e5e] border-none hover:bg-[#da5a4b] text-white duration-200 px-5">
                Update Details
              </button>
            </Link>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default ListBook;
