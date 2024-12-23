import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import loginLottie from "../../Lottie/login.json";
import Lottie from "lottie-react";
import useAuth from "../../Auth/Hook/useAuth";

const Login = () => {
  // useContext
  const { login, setUsers, google } = useAuth();
  // useLocation
  const location = useLocation();
  // useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login
    login(email, password)
      .then((result) => {
        setUsers(result.user);
        toast.success("Sign In Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  // google
  const handleGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    google(googleProvider)
      .then((result) => {
        setUsers(result.user);
        toast.success("Sign In Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse gap-10 w-11/12 mx-auto">
        {/* login form */}
        <div className="flex-1 flex lg:justify-end justify-center">
          <div className="card bg-[#f9f9f9] dark:bg-[#0a1020] w-full max-w-lg py-14 mb-28 mt-16 sm:px-12 px-6">
            <form onSubmit={handleSubmit}>
              <h2 className={"sm:text-[40px] text-3xl font-semibold mb-8"}>
                Sign In to Account
              </h2>

              {/* input fields */}
              <div className="space-y-2">
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
                  <label className="label">
                    <span className="label-text-alt link link-hover dark:text-white pt-4">
                      Forgot password?
                    </span>
                  </label>
                </div>

                {/* submit */}
                <div className="form-control pt-2">
                  <button className="btn dark:bg-slate-900 dark:hover:bg-slate-950 dark:text-white border-none mt-2 text-lg font-semibold">
                    <span className="z-10">Sign In</span>
                  </button>

                  {/* google sign in */}
                  <div className="divider dark:before:bg-base-300 dark:after:bg-base-300 py-5">
                    or sign In with Google
                  </div>
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="btn hover:bg-[#114444] border-none bg-[#0c5555] text-white text-lg font-bold h-14"
                  >
                    <FcGoogle size={30} />
                    <span className="mt-1">Google Sign In</span>
                  </button>
                </div>
              </div>
            </form>

            <p className="text-center mt-7">
              {`Don't have an account? `}
              <Link to={"/register"}>
                <span className="underline font-bold">Sign up</span>
              </Link>
            </p>
          </div>
        </div>

        {/* lottie animation */}
        <div className="flex-1 flex items-center flex-col">
          <Lottie
            animationData={loginLottie}
            className="max-w-lg w-full mt-28"
          ></Lottie>
        </div>
      </div>
    </>
  );
};

export default Login;
