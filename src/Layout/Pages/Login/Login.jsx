import { GoogleAuthProvider } from "firebase/auth";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Login = () => {
  const { signIn, googleLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("https://server-five-lake.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
        // setErrorMessage(errorMessage);
      });
  };

  const handleSignIn = (data) => {
    event.preventDefault();

    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-4">Login now!</h1>
          <img
            src={
              "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3dvcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      {...register("password", { required: true })}
                    />

                    <button
                      className="btn btn-square input-action"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <div className="mt-2 flex p-2">
                    <h2>Don't have an account?</h2>
                    <Link
                      to="/register"
                      className="text-cyan-700 btn-link px-2"
                    >
                      Register
                    </Link>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    name="login"
                    type="submit"
                    value="login"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mx-auto mb-4">
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-outline flex btn-primary 
            "
            >
              <span className="px-2">
                <FaGoogle />
              </span>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
