import React, { useContext, useEffect } from "react";
import Slider from "../components/Slider";
import RunningCampaigns from "../components/RunningCampaigns";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import { FiSun, FiMoon } from "react-icons/fi";
import { AuthContext } from "../provider/AuthProvider";

const HomePage = () => {
  const { isDark, setIsDark } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Crowdcube | Home";
  }, []);

  return (
    <div className="relative space-y-8 md:space-y-16 lg:space-y-20 dark:bg-black">
      <Slider />
      <RunningCampaigns />
      <Blog />
      <FAQ />
      <button
        className="p-4 rounded-full bg-blue-200 fixed right-5 bottom-5 z-10"
        onClick={() => setIsDark((c) => !c)}
      >
        {isDark ? <FiSun className="dark:text-black" /> : <FiMoon />}
      </button>
    </div>
  );
};

export default HomePage;
