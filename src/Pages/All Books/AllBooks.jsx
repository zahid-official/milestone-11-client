import { useState } from "react";
import PageTitle from "../../Components/PageTitle";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const AllBooks = () => {
  const loadedData = useLoaderData();

  // state for all books
  const [allBooks, setAllBooks] = useState(loadedData);

  return (
    <div>
      <div>
        <PageTitle
          title={"All Books"}
          subtitle={"Explore Every Book We Offer"}
        ></PageTitle>
      </div>

      {/* all books */}
      <div className="flex flex-wrap justify-center gap-x-12 sm:gap-y-24 gap-y-12 max-w-[90rem] mx-auto my-40 ">
        {allBooks.map((book, ) => (
          <Book
            key={book._id}
            allBooks={allBooks}
            setAllBooks={setAllBooks}
            book={book}
          ></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
