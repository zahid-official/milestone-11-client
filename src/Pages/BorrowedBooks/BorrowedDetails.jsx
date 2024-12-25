/* eslint-disable react/prop-types */

import axios from "axios";

const BorrowedDetails = ({ borrowed, setBorrowedBooks }) => {
  const {
    isbn,
    author,
    category,
    bookName,
    bookImage,
    returnDate,
    borrowedDate,
    borrowerName,
    borrowerEmail,
  } = borrowed;


    // handleReturn
    const handleReturn = () => {
        axios.delete(`http://localhost:3000/returnBook?isbn=${isbn}&borrowerEmail=${borrowerEmail}`)
        .then((res) => setBorrowedBooks(res.data))
    }


  return (
    <tbody>
      {/* body */}
      <tr>
        <td>
          <div className="flex items-center gap-5">
            <div className="">
              <div className="">
                <img src={bookImage} className="h-24" />
              </div>
            </div>
            <div>
              <div className="font-bold  text-lg">{bookName}</div>
              <div className="font-semibold text-base -mt-1.5 mb-2">
                <span className="italic">by</span> {author}
              </div>
              <div className="text-sm font-semibold opacity-50">
                Genre: {category}
              </div>
            </div>
          </div>
        </td>

        <td className="space-y-1.5">
          <span className="pl-2 pb-2">{borrowerName}</span>
          <br />
          <span className="badge badge-ghost badge-sm">{borrowerEmail}</span>
        </td>

        <td className="pl-7">{borrowedDate}</td>
        <td className="pl-7">{returnDate}</td>

        <th>
          <button onClick={handleReturn} className="btn rounded-xl bg-[#f66e5e] hover:bg-[#da5a4b] text-white duration-200 px-5">
            Return
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default BorrowedDetails;
