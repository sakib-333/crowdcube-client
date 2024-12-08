import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { handleSignoutUser } from "../utilities/handleSignoutUser";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allCampaign"}>All Campaign</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/addCampaign"}>Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to={"/myCampaign"}>My Campaign</NavLink>
          </li>
          <li>
            <NavLink to={"/myDonations"}>My Donations</NavLink>
          </li>
        </>
      ) : null}
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow dark:text-white"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Crowdcube
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 dark:text-white">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="relative group">
            <img
              className="w-12 h-12 rounded-full"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
              src={user?.photoURL}
              alt="photo"
            />
            <Tooltip id="my-tooltip" />
            <button
              className="btn z-10 hidden group-hover:block absolute w-max right-0 top-12"
              onClick={() => handleSignoutUser(signoutUser)}
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Link to={"/login"} className="btn btn-outline dark:text-white">
              Log in
            </Link>
            <Link to={"/register"} className="btn btn-outline dark:text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
