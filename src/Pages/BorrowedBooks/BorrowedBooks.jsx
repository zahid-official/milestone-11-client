import { useEffect, useState } from "react";
import useAuth from "../../Auth/Hook/useAuth";
import BorrowedDetails from "./BorrowedDetails";
import useAxios from "../../Auth/Hook/useAxios";
import Navbar from "../../Components/Navbar";
import PageTitle from "../../Components/PageTitle";

const BorrowedBooks = () => {
  // contextAPI
  const { users } = useAuth();
  const email = users?.email;

  // useAxios Hook
  const axiosInstance = useAxios();

  // state for data
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/borrowedBooks/${email}`)
      .then((res) => setBorrowedBooks(res.data));
  }, [email, axiosInstance]);

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
      {/* pageTitle */}
      <section className="bg-[url(/assets/pageTitle7.jpg)] bg-center bg-cover">
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
            title={"Borrowed Books"}
            subtitle={"Explore the Full List of Borrowed Books"}
          ></PageTitle>
        </div>
      </section>

      {/* content */}
      <div className="pt-16 pb-36 px-6">
        <div className="max-w-7xl mx-auto gap-5">
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead>
                <tr className="text-base dark:text-white">
                  <th>Book</th>
                  <th>Borrower</th>
                  <th>Borrowed Date</th>
                  <th>Return Date</th>
                  <th></th>
                </tr>
              </thead>

              {borrowedBooks.map((borrowed) => (
                <BorrowedDetails
                  key={borrowed._id}
                  setBorrowedBooks={setBorrowedBooks}
                  borrowed={borrowed}
                ></BorrowedDetails>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowedBooks;
