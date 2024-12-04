import React from "react";
import Slider from "../components/Slider";
import RunningCampaigns from "../components/RunningCampaigns";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";

const HomePage = () => {
  return (
    <div className="space-y-8 md:space-y-16 lg:space-y-20">
      <Slider />
      <RunningCampaigns />
      <Blog />
      <FAQ />
    </div>
  );
};

export default HomePage;
