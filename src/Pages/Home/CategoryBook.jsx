/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CategoryBook = ({ categoryBook }) => {
  const {
    _id: id,
    bookName,
    bookImage,
    author,
    category,
    quantity,
    rating,
  } = categoryBook;
  return (
    <>
      <div className="justify-self-centerrounded-xl flex flex-col justify-between items-start max-w-[26rem] rounded-2xl md:px-5">
        {/* img */}
        <div className="w-full">
          <img src={bookImage} alt="book" className="h-80" />

        </div>

        {/* content */}
        <div className=" w-full mt-2">
          <h2 className="text-xl title-font font-semibold mt-4">{bookName}</h2>
          <div className="space-y-1.5">
            <div className="flex gap-2 justify-between items-center">
              <p>
                <span className="italic text-sm">by </span> {author}
              </p>
              <p>
                <Rating style={{ maxWidth: 72 }} value={rating} readOnly />
              </p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-sm">
                Genre: <span className="font-semibold"> {category}</span>
              </p>
              <p className="text-sm">
                Available: <span className="font-semibold"> {quantity}</span>
              </p>
            </div>
          </div>
        </div>

        {/* button */}
        <Link to={`/bookDetails/${id}`} className="w-full mt-5">
          <button className="btn bg-transparent duration-300 rounded-3xl hover:bg-[#f66e5e] hover:text-white w-full">
            See Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default CategoryBook;
