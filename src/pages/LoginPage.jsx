import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { handleSigninWithGoogle } from "../utilities/handleSigninWithGoogle";
import { handleLogin } from "../utilities/handleLogin";

const LoginPage = () => {
  const [view, setView] = useState(false);
  const { signinUser, signinWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Crowdcube | Login";
  }, []);

  return (
    <div className="card bg-background border border-text w-full max-w-md shrink-0 mx-auto my-4 md:my-8 lg:my-12">
      <form
        className="card-body"
        onSubmit={(e) => handleLogin(e, signinUser, navigate, setLoading)}
      >
        <h1 className="text-center text-xl font-bold text-primary">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email..."
            className="input input-bordered bg-tertiary text-text"
            name="email"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text  text-text font-bold">Password</span>
          </label>
          <input
            type={view ? "text" : "password"}
            placeholder="Password..."
            className="input input-bordered bg-tertiary text-text"
            name="password"
            required
          />
          <button
            type="button"
            className="absolute top-[50px] right-4  text-text"
            onClick={() => setView((c) => !c)}
          >
            {view ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="form-control mt-4">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider text-text">Or</div>
        <div className="form-control">
          <button
            type="button"
            className="btn btn-primary bg-background border border-text"
            onClick={() => handleSigninWithGoogle(signinWithGoogle, navigate)}
          >
            <FcGoogle />
            <span>Google</span>
          </button>
        </div>
        <p className="text-center text-text">
          <span>Don't have an account? </span>
          <Link to={"/register"} className="text-blue-600 hover:text-black">
            Register
          </Link>
          <span> here.</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
