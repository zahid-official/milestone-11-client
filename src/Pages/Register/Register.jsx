import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import registerLottie from "../../Lottie/register.json";
import useAuth from "../../Auth/Hook/useAuth";

const Register = () => {
  // useContent
  const { register, profile, setUsers, google } = useAuth();
  // state for password
  const [strongPassword, setStrongPassword] = useState("");
  // useLocation
  const location = useLocation();
  // useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    // input data
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    setStrongPassword("");
    if (!passwordRegex.test(password)) {
      setStrongPassword(
        "Must have an Uppercase & Lowercase letter and Length must be at least 6 character"
      );
      return;
    }

    // register
    register(email, password)
      .then((result) => {
        setUsers(result.user);

        // profile update
        profile({ displayName: name, photoURL: photo })
          .then(() => {
            setUsers({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Sign Up Successfully");
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  // handleGoogle
  const handleGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    google(googleProvider)
      .then((result) => {
        setUsers(result.user);
        toast.success("Sign Up Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="flex xl:flex-row flex-col xl:gap-44 gap-16 w-11/12 mx-auto">
        {/* lottie animation */}
        <div className="flex-1 flex xl:items-end items-center flex-col">
          <Lottie
            animationData={registerLottie}
            className="max-w-xl w-full mt-28"
          ></Lottie>
        </div>
        
        {/* registration form */}
        <div className="flex-1">
          <div className="card bg-[#f9f9f9] dark:bg-[#0a1020] w-full max-w-xl xl:mx-0 mx-auto py-14 mt-10 mb-28 sm:px-12 px-6">
            <form onSubmit={handleSubmit}>
              <h2 className={"sm:text-[40px] text-3xl font-semibold mb-5"}>
                Sign Up to Website
              </h2>

              {/* input fields */}
              <div className="space-y-2">
                {/* name */}
                <div className="form-control">
                  <label className="label font-semibold">
                    <span className="label-text dark:text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered dark:bg-[#010313]"
                    required
                  />
                </div>

                {/* photo */}
                <div className="form-control">
                  <label className="label font-semibold">
                    <span className="label-text dark:text-white">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered dark:bg-[#010313]"
                    required
                  />
                </div>

                {/* email */}
                <div className="form-control">
                  <label className="label font-semibold">
                    <span className="label-text dark:text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered dark:bg-[#010313]"
                    required
                  />
                </div>

                {/* password */}
                <div className="form-control">
                  <label className="label font-semibold">
                    <span className="label-text dark:text-white">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered dark:bg-[#010313]"
                    required
                  />

                  {/* strong password */}
                  <label className="label">
                    {strongPassword && (
                      <span className="label-text mt-3 text-red-600">
                        {strongPassword}
                      </span>
                    )}
                  </label>
                </div>

                {/* submit */}
                <div className="form-control">
                  <button className="btn mt-2 text-lg font-semibold dark:bg-slate-900 dark:hover:bg-slate-950 dark:text-white border-none">
                    <span className="z-10">Sign Up</span>
                  </button>

                  {/* google sign in */}
                  <div className="divider dark:before:bg-base-300 dark:after:bg-base-300 py-5">
                    or sign up with Google
                  </div>
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="btn hover:bg-[#114444] border-none bg-[#0c5555] text-white text-lg font-bold h-14"
                  >
                    <FcGoogle size={30} />
                    <span className="mt-1"> Google Sign Up</span>
                  </button>
                </div>
              </div>
            </form>

            <p className="text-center mt-7">
              {`Already have an account? `}
              <Link to={"/login"}>
                <span className="underline font-bold">Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
