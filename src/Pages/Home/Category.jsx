import { useLoaderData, useParams } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import CategoryBook from "./CategoryBook";

const Category = () => {
  // useLoader
  const data = useLoaderData();
  const params = useParams();
  return (
    <>
      <div>
        <PageTitle
          title={params.id}
          subtitle={`Explore Our ${params.id} Collection`}
        ></PageTitle>
      </div>

      {/* all books */}
      <div className="flex flex-wrap justify-center gap-x-12 sm:gap-y-24 gap-y-12 max-w-[90rem] mx-auto my-40 ">
        {data.map((book) => (
          <CategoryBook key={book._id} categoryBook={book}></CategoryBook>
        ))}
      </div>
    </>
  );
};

export default Category;
