import React from "react";
import Slider from "../components/Slider";
import RunningCampaigns from "../components/RunningCampaigns";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <RunningCampaigns />
      <Blog />
      <FAQ />
    </div>
  );
};

export default HomePage;
