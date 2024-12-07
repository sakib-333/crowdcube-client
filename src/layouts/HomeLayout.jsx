import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";

const HomeLayout = () => {
  const { loading, isDark } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [pathname, isDark]);

  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-200">
      <Navbar />
      <div className="min-h-screen p-4">
        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner text-primary w-16"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
