import { useEffect, useState } from "react";
import useAuth from "../../Auth/Hook/useAuth";
import axios from "axios";
import BorrowedDetails from "./BorrowedDetails";

const BorrowedBooks = () => {
  // contextAPI
  const { users } = useAuth();
  const email = users?.email;

  // state for data
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/borrowedBooks/${email}`)
      .then((res) => setBorrowedBooks(res.data));
  }, [email]);
  return (
    <div className="pt-16 pb-36">
      <div className="max-w-7xl mx-auto gap-5">
        <div className="overflow-x-auto">
          <table className="table border">
            {/* head */}
            <thead>
              <tr className="text-base">
                <th>Book</th>
                <th>Borrower</th>
                <th>Borrowed Date</th>
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
  );
};

export default BorrowedBooks;
