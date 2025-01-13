/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Book = ({ book }) => {
  const { _id: id, bookName, bookImage, author, category, quantity } = book;

  return (
    <>
      <div className="justify-self-centerrounded-xl flex flex-col justify-between items-start max-w-[26rem] rounded-2xl md:px-5">
        {/* img */}
        <div className="book">
          <Link to={`/updateBook/${id}`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              transition={{ visualDuration: 0.2 }}
              src={bookImage}
              alt="book"
              className="h-80"
            />
          </Link>
        </div>

        {/* content */}
        <div className=" w-full">
          <h2 className="text-xl title-font font-semibold mt-4">{bookName}</h2>
          <div className="space-y-1.5">
            <p>
              <span className="italic text-sm">by </span> {author}
            </p>

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
        <Link to={`/updateBook/${id}`} className="w-full mt-5 bookBtn">
          <button className="btn bg-transparent dark:hover:border-none dark:text-white duration-300 rounded-lg hover:bg-[#f66e5e] hover:text-white w-full">
            Update Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default Book;
