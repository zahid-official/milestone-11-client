import { useLoaderData, useParams } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import CategoryBook from "./CategoryBook";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";

const Category = () => {
  // useLoader
  const data = useLoaderData();
  const params = useParams();
  const categoryTitle = params?.id;

  // state for scroll
  const [isScroll, setIsScroll] = useState(false);

  // useEffect for navbar scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <section
        className={`
        ${categoryTitle === "Comedy" && "bg-[url(/assets/pageTitle.jpg)]"} 
        ${categoryTitle === "Thriller" && "bg-[url(/assets/pageTitle5.jpg)]"} 
        ${categoryTitle === "Adventure" && "bg-[url(/assets/quotesBg.jpg)]"} 
        ${categoryTitle === "Fantasy" && "bg-[url(/assets/pageTitle2.jpg)]"} 
        ${categoryTitle === "Mystery" && "bg-[url(/assets/pageTitle3.jpg)]"} 
        ${categoryTitle === "Magical" && "bg-[url(/assets/pageTitle4.jpg)]"}
        bg-center bg-cover`}
      >
        <div
          className={`fixed top-0 z-50 w-full ${
            isScroll
              ? "bg-white dark:bg-[#010313] backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70 text-black dark:text-white"
              : "text-white"
          }`}
        >
          <Navbar></Navbar>
        </div>
        <div className="bg-[#18273a33] text-white pt-24">
          <PageTitle
            title={categoryTitle}
            subtitle={`Explore Our ${categoryTitle} Collection`}
          ></PageTitle>
        </div>
      </section>

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
