import { useLoaderData } from "react-router-dom";
import useAuth from "../../Auth/Hook/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const BookDetails = () => {
  // useLoader
  const data = useLoaderData();
  const [num, setNum] = useState(data);
  // contextAPI
  const { users } = useAuth();
  const borrowerName = users?.displayName;
  const borrowerEmail = users?.email;

  const {
    _id: isbn,
    bookName,
    bookImage,
    author,
    category,
    quantity,
    rating,
    bookContent,
    description,
  } = num || {};

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const borrowDate = event.target.appliedDate.value;
    const borrowedData = {
      isbn,
      bookName,
      bookImage,
      author,
      category,
      quantity,
      rating,
      bookContent,
      description,
      borrowDate,
      borrowerName,
      borrowerEmail,
    };

    // create applicationsData in mongoDB
    axios.post("http://localhost:3000/borrow", borrowedData).then((res) => {
      toast.success("Book Borrowed Successfully");
      setNum(res.data);
    });

    document.getElementById("my_modal_5").close();
  };

  return (
    <>
      {/* details */}
      <div className="">
        <div className="hero bg-[#f9f9f9] dark:bg-[#0e1629] xl:w-10/12 w-11/12 mt-8 mb-36 mx-auto sm:py-28 py-12 px-10 rounded-3xl">
          <div className="hero-content gap-10 flex-col lg:flex-row w-full">
            <div className="flex-1 flex justify-center">
              <img src={bookImage} className="sm:max-w-sm" />
            </div>

            <div className="flex-1 px-4 space-y-1.5">
              {/* heading */}
              <div className="space-y-2">
                <h1 className="sm:text-5xl text-4xl font-bold">{bookName}</h1>
                <p className="font-semibold sm:text-xl">Author: {author}</p>
                <p className="font-semibold sm:text-lg">Category: {category}</p>
              </div>
              <br />

              <p>
                <span className="font-semibold">Rating: </span>
                {rating}
              </p>
              <p>
                <span className="font-semibold">Quantity: </span>
                {quantity}
              </p>

              <p>
                <span className="font-semibold">Book Content: </span>
                {bookContent}
              </p>
              <p className="pb-8">
                <span className="font-semibold">Book Description: </span>
                {description}
              </p>

              <button
                className="btn btn-neutral hover:bg-[#131b25] text-white font-bold px-12 h-14  text-lg"
                disabled={quantity < 1 }
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Borrow Book
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box pt-12 px-10 pb-16 sm:rounded-2xl rounded-none">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl mb-4 font-bold">Apply for Visa</h2>
            <div className="space-y-2.5 mb-10">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="applicantEmail"
                  defaultValue={borrowerName}
                  placeholder="Name"
                  className="input input-bordered"
                  disabled
                />
              </div>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  name="applicantEmail"
                  defaultValue={borrowerEmail}
                  placeholder="Email"
                  className="input input-bordered"
                  disabled
                />
              </div>

              {/* date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Return Date</span>
                </label>
                <input
                  type="date"
                  name="appliedDate"
                  placeholder="Apply Date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-neutral hover:bg-[#131b25] text-white text-lg font-semibold w-full"
            >
              Borrow Book
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookDetails;
