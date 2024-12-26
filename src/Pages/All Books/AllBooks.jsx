import PageTitle from "../../Components/PageTitle";
import { useLoaderData } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import Book from "./Book";
import { useState } from "react";
import ListBook from "./ListBook";
import axios from "axios";

const AllBooks = () => {
  // useLoader
  const loadedData = useLoaderData();
  // filter Data
  const [data, setData] = useState(loadedData);
  // state for toggleView
  const [toggleView, setToggleView] = useState(true);

  // handleView
  const handleView = (value) => {
    setToggleView(value);
  };

  // handleFilter
  const handleFilter = () => {
    axios.get('https://trackbook-server.vercel.app/filter')
    .then(res => setData(res.data))
  }

  return (
    <>
      <div>
        <PageTitle
          title={"All Books"}
          subtitle={"Explore Every Book We Offer mt-"}
        ></PageTitle>
      </div>

      <div className=" mt-28 flex gap-3 items-center justify-between px-6 mb-12 max-w-[90rem] mx-auto">
        {/* toggle view */}
        <div className="inline-flex justify-center gap-3 rounded-xl ">
          {/* grid btn */}
          <button
            onClick={() => handleView(true)}
            className={`${
              toggleView &&
              "text-red-400 dark:text-red-400 border-red-400 dark:border-red-400"
            } btn bg-transparent h-14`}
          >
            <IoGrid size={25}></IoGrid>
          </button>

          {/* list btn */}
          <button
            onClick={() => handleView(false)}
            className={`${
              toggleView ||
              "text-red-400 dark:text-red-400 border-red-400 dark:border-red-400"
            } btn bg-transparent h-14`}
          >
            <FaListUl size={25}></FaListUl>
          </button>
        </div>

        {/* filter */}
        <button onClick={handleFilter} className="btn text-base bg-red-400 border-none text-white">Filter Available Books</button>
      </div>

      {/* display all books */}

      {/* grid view */}
      <div
        className={`${
          toggleView ? "flex" : "hidden"
        } flex-wrap justify-center gap-x-12 sm:gap-y-24 gap-y-12 max-w-[90rem] mx-auto mb-40`}
      >
        {data.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </div>

      {/* list view */}
      <div className={`pb-40 px-6 ${toggleView ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto gap-5">
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead>
                <tr className="text-base dark:text-white">
                  <th>Book Cover</th>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Quantity</th>
                </tr>
              </thead>

              {data.map((book) => (
                <ListBook key={book._id} book={book}></ListBook>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
