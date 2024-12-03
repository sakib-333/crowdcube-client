import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { handleSignoutUser } from "../utilities/handleSignoutUser";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Test</NavLink>
      </li>
      <li>
        <NavLink to={"/test2"}>Test2</NavLink>
      </li>
      <li>
        <NavLink to={"/test3"}>Test3</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center">
          <h1>PH B10 A10</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-1">
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt="photo"
            />
            <button
              className="btn btn-outline"
              onClick={() => handleSignoutUser(signoutUser)}
            >
              Log out
            </button>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-outline">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
