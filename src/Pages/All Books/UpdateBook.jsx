import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../Auth/Hook/useAuth";
import { FaBookBookmark } from "react-icons/fa6";
import PageTitle from "../../Components/PageTitle";
import Navbar from "../../Components/Navbar";

const UpdateBook = () => {
  // contextAPI
  const { users } = useAuth();
  // loaderData
  const data = useLoaderData();

  const {
    _id: id,
    bookName: name,
    bookImage: image,
    category: genre,
    author: writer,
    rating: point,
  } = data || {};

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const bookName = event.target.bookName.value;
    const bookImage = event.target.bookImage.value;
    const category = event.target.category.value;
    const author = event.target.author.value;
    const rating = event.target.rating.value;
    const updaterEmail = users?.email;

    // validation number input
    if (rating < 1 || rating > 5) {
      return toast.error("You Provide a Invalid Number in Number Input Field.");
    }

    const updateBookData = {
      bookName,
      bookImage,
      category,
      author,
      rating,
      updaterEmail,
    };
    console.log(updateBookData);

    axios
      .put(
        `https://trackbook-server.vercel.app/updateBook/${id}`,
        updateBookData
      )
      .then((res) => {
        console.log(res);
        toast.success("Book Updated Successfully");
      });
  };

  return (
    <>
      <section className="bg-[url(/assets/pageTitle6.jpg)] bg-center bg-cover">
        <div className="bg-[#18273a33] text-white">
          <Navbar></Navbar>
          <PageTitle
            title={"Update Book Details"}
            subtitle={"Revise Book Information for Accurate Records"}
          ></PageTitle>
        </div>
      </section>

      {/* book info */}
      <section className="py-36">
        <div className="px-5 sm:w-11/12 mx-auto mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* top */}
            <div className="w-full max-w-6xl mx-auto sm:px-10 px-5 sm:py-24 py-14 bg-[#f9f9f9] dark:bg-[#0e1629] rounded-3xl space-y-8">
              {/* title */}
              <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
                <div className="p-8 bg-[#2b3440] inline-block rounded-full">
                  <FaBookBookmark size={35} color="#fff" />
                </div>

                <div>
                  <h2 className="sm:text-4xl text-3xl font-bold">
                    Update Book Infomations
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
                  defaultValue={name}
                  name="bookName"
                  placeholder="Book Name"
                  className="input dark:text-black dark:focus:outline-base-300 input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="text"
                  defaultValue={image}
                  name="bookImage"
                  placeholder="Upload Book Image"
                  className="input dark:text-black dark:focus:outline-base-300 input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-02 */}
              <div className="flex gap-4 md:flex-row flex-col ">
                <input
                  type="text"
                  name="author"
                  defaultValue={writer}
                  placeholder="Author Name"
                  className="input dark:text-black dark:focus:outline-base-300 input-bordered w-full text-base font-semibold"
                  required
                />

                <input
                  type="number"
                  name="rating"
                  defaultValue={point}
                  placeholder="Rating (Only Number between 1-5)"
                  className="input dark:text-black dark:focus:outline-base-300 input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* row-03 */}
              <select
                className="select dark:text-black dark:focus:outline-base-300 select-bordered w-full text-base font-semibold"
                required="required"
                name="category"
                defaultValue={genre}
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
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-neutral hover:bg-[#131b25] px-14 mt-12 h-14 text-lg font-semibold"
                >
                  Update Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateBook;
