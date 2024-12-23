import { Link } from "react-router-dom";
import error from "/assets/error.png";

const Error = () => {
  return (
    <div>
      <div className="gap-3 flex flex-col items-center justify-center pt-10 px-5 text-center">
        <img src={error} alt="error" />
        <h2 className="md:text-5xl text-4xl font-semibold">
          Oops, looks like the page is lost.
        </h2>
        <Link to={"/"}>
          <button className="btn mt-4 text-lg font-semibold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
