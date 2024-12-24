import PageTitle from "../../Components/PageTitle";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const AllBooks = () => {
  // useLoader
  const data = useLoaderData();

  return (
    <>
      <div>
        <PageTitle
          title={"All Books"}
          subtitle={"Explore Every Book We Offer"}
        ></PageTitle>
      </div>

      {/* all books */}
      <div className="flex flex-wrap justify-center gap-x-12 sm:gap-y-24 gap-y-12 max-w-[90rem] mx-auto my-40 ">
        {data.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default AllBooks;
