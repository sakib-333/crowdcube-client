import React, { useEffect } from "react";
import Slider from "../components/Slider";
import RunningCampaigns from "../components/RunningCampaigns";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";

const HomePage = () => {
  useEffect(() => {
    document.title = "Crowdcube | Home";
  }, []);

  return (
    <div className="relative space-y-8 md:space-y-16 lg:space-y-20 dark:bg-black">
      <Slider />
      <RunningCampaigns />
      <Blog />
      <FAQ />
    </div>
  );
};

export default HomePage;
