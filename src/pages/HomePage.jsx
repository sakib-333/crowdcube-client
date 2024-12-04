import React from "react";
import Slider from "../components/Slider";
import RunningCampaigns from "../components/RunningCampaigns";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <RunningCampaigns />
      <FAQ />
    </div>
  );
};

export default HomePage;
