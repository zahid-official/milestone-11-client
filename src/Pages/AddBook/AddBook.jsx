import { toast } from "react-toastify";
import PageTitle from "../../Components/PageTitle";
import useAuth from "../../Auth/Hook/useAuth";
import { FaBookBookmark } from "react-icons/fa6";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";

const AddBook = () => {
  // contextAPI
  const { users } = useAuth();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const bookName = event.target.bookName.value;
    const bookImage = event.target.bookImage.value;
    const category = event.target.category.value;
    const author = event.target.author.value;
    const quantity = parseInt(event.target.quantity.value);
    const rating = parseInt(event.target.rating.value);
    const bookContent = event.target.bookContent.value;
    const description = event.target.textarea.value;
    const userEmail = users?.email;

    // validation number input
    if (quantity < 1 || rating < 1 || rating > 5) {
      return toast.error("You Provide a Invalid Number in Number Input Field.");
    }

    const addBookData = {
      bookName,
      bookImage,
      category,
      author,
      quantity,
      rating,
      bookContent,
      description,
      userEmail,
    };

    axios
      .post("https://trackbook-server.vercel.app/addBook", addBookData)
      .then((res) => {
        console.log(res);
        toast.success("Book Added Successfully");
      });
  };

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
      <section className="bg-[url(/assets/pageTitle3.jpg)] bg-center bg-cover">
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
            title={"Add Book"}
            subtitle={"Contribute a Book to Our Collection"}
          ></PageTitle>
        </div>
      </section>

      {/* book info */}
      <section className="py-36 dark:text-black">
        <div className="px-5 sm:w-11/12 mx-auto mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* top */}
            <div className="w-full max-w-6xl mx-auto sm:px-10 px-5 sm:py-24 py-14 bg-[#f9f9f9] dark:bg-[#0e1629] dark:text-white rounded-3xl space-y-8">
              {/* title */}
              <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
                <div className="p-8 bg-[#2b3440] inline-block rounded-full">
                  <FaBookBookmark size={35} color="#fff" />
                </div>

                <div>
                  <h2 className="sm:text-4xl text-3xl font-bold">
                    Book Infomations
                  </h2>
                  <p className="font-semibold">
                    Please fill out all book details here.
                  </p>
                </div>
              </div>

              {/* row-01 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="bookName"
                  placeholder="Book Name"
                  className="input dark:text-black dark:focus:outline-base-300  input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="text"
                  name="bookImage"
                  placeholder="Upload Book Image"
                  className="input dark:text-black dark:focus:outline-base-300  input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="author"
                  placeholder="Author Name"
                  className="input dark:text-black dark:focus:outline-base-300  input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity (Only Number)"
                  className="input dark:text-black dark:focus:outline-base-300  input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-03 */}
              <div className="flex gap-4 md:flex-row flex-col">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating (Only Number between 1-5)"
                  className="input dark:text-black dark:focus:outline-base-300  input-bordered w-full text-base font-semibold"
                  required
                />

                <select
                  className="select dark:text-black dark:focus:outline-base-300  select-bordered w-full text-base font-semibold"
                  required="required"
                  name="category"
                >
                  <option value="" disabled selected>
                    Category
                  </option>
                  <option value="Comedy">Comedy</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Magical">Magical</option>
                </select>
              </div>
            </div>

            {/* bottom */}
            <div className="sm:px-10 w-full max-w-6xl mx-auto px-6 sm:py-16 py-8 bg-[#f9f9f9] dark:bg-[#0e1629] dark:text-white rounded-3xl text-center">
              <div className="flex gap-4 md:flex-row flex-col ">
                <textarea
                  rows={"4"}
                  name="bookContent"
                  placeholder="Book Content..."
                  className="textarea dark:text-black dark:focus:outline-base-300  textarea-bordered textarea-lg w-full"
                  required
                ></textarea>

                <textarea
                  rows={"4"}
                  name="textarea"
                  placeholder="Description..."
                  className="textarea dark:text-black dark:focus:outline-base-300  textarea-bordered textarea-lg w-full"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-neutral hover:bg-[#131b25] px-14 mt-12 text-lg font-semibold"
              >
                <span className="z-10">Add Book</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddBook;
