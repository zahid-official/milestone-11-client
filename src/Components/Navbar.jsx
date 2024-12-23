import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../Auth/Hook/useAuth";

const Navbar = () => {
  // useContext
  const { users, TrackBookut } = useAuth();

  // handleSignOut
  const handleSignOut = () => {
    TrackBookut()
      .then(() => {
        toast.success("Sign Out Successfully");
      })
      .catch((error) => toast.error(error.message));
  };

  // handleDarkMode
  const handleDarkMode = () => {
    const darkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme === "dark" && document.documentElement.classList.add("dark");
  }, []);

  const links = (
    <>
      <li className="text-lg font-bold">
        <NavLink to={"/"} className={'dark:hover:bg-slate-800'}>Home</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/allBooks"} className={'dark:hover:bg-slate-800'}>All Books</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/addBook"} className={'dark:hover:bg-slate-800'}>Add Book</NavLink>
      </li>
      <li className="text-lg font-bold">
        <NavLink to={"/borrowedBooks"} className={'dark:hover:bg-slate-800'}>Borrowed Books</NavLink>
      </li>

      {users?.email ? (
        ""
      ) : (
        <>
          <div className="divider divider-start sm:hidden m-0"></div>
          <li className="text-lg font-bold sm:hidden">
            <NavLink to={"/login"} className={'dark:hover:bg-slate-800'}>
              <span>Sign In</span>
            </NavLink>
          </li>
          <li className="text-lg font-bold sm:hidden">
            <NavLink to={"/register"} className={'dark:hover:bg-slate-800'}>
              <span>Sign Up</span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar sm:w-11/12 mx-auto py-6 px-3">
        {/* start */}
        <div className="navbar-start">
          <Link to={"/"}>
            <h2 className="text-4xl font-bold">TrackBook</h2>
          </Link>
        </div>

        {/* center */}
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* end */}
        <div className="navbar-end gap-2">
          {/* darkmode */}
          <div className="mr-2 flex items-center">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onClick={handleDarkMode}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {users?.email ? (
            <div className="relative rounded-full profilePhoto">
              <div className="dropdown dropdown-hover  rounded-full">
                <div tabIndex={0} role="button" className="rounded-full m-1">
                  
                  <img
                  src={`${users?.photoURL}`}
                  alt="profile photo"
                  className="h-10 w-10 rounded-[50%] object-cover"
                />
                </div>
                
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 dark:bg-[#0a1020] rounded-box z-30 w-44 px-2 py-5 border dark:border-none text-center text-base font-bold space-y-3 -right-14">
                <li className="px-3 border-b pb-4">{users?.displayName}</li>
                <li className="px-3">
                  <button
                    onClick={handleSignOut}
                    className="btn dark:bg-[#010313] dark:hover:bg-[#161f2c] dark:border-slate-800 dark:text-white text-lg font-bold min-w-28"
                  >
                    Sign Out
                  </button>
                </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="sm:flex gap-2.5 hidden">
              <Link to={"/login"}>
                <button className="btn dark:bg-[#0a1020] dark:hover:bg-slate-800 dark:border-slate-700 dark:text-white text-lg font-bold min-w-28">
                  Sign In
                </button>
              </Link>

              <Link to={"/register"}>
                <button className="btn dark:bg-[#0a1020] dark:hover:bg-slate-800 dark:border-slate-700 dark:text-white text-lg font-bold min-w-28">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="z-20 dark:bg-[#0a1020] right-2 py-4 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;