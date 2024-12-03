import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { handleRegister } from "../utilities/handleRegister";
import { handleSigninWithGoogle } from "../utilities/handleSigninWithGoogle";
import { AuthContext } from "../provider/AuthProvider";

const RegisterPage = () => {
  const [view, setView] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState(null);
  const { signupUser, signinWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto my-4 md:my-8 lg:my-12">
      <form
        className="card-body"
        onSubmit={(e) =>
          handleRegister(
            e,
            setPassErrMsg,
            signupUser,
            updateUserProfile,
            navigate
          )
        }
      >
        <h1 className="text-center text-xl font-bold text-blue-500">
          Register
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name..."
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL..."
            className="input input-bordered"
            name="photoURL"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email..."
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type={view ? "text" : "password"}
            placeholder="Password..."
            className="input input-bordered"
            name="password"
            required
          />
          <button
            type="button"
            className="absolute top-[50px] right-4"
            onClick={() => setView((c) => !c)}
          >
            {view ? <FaEye /> : <FaEyeSlash />}
          </button>
          {passErrMsg && <p className="text-red-700 p-1">{passErrMsg}</p>}
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="divider">Or</div>
        <div className="form-control">
          <button
            type="button"
            className="btn"
            onClick={() => handleSigninWithGoogle(signinWithGoogle, navigate)}
          >
            <FcGoogle />
            <span>Google</span>
          </button>
        </div>
        <p className="text-center">
          <span>Already have an account? </span>
          <Link to={"/login"} className="text-blue-600 hover:text-black">
            Login
          </Link>
          <span> here.</span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
