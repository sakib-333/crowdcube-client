import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RunningCampaigns = () => {
  const [runningCampaigns, setRunningCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/currently-running-campaigns")
      .then((res) => res.json())
      .then((data) => setRunningCampaigns(data))
      .catch(() => toast.error("Something went wrong."));
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-4 md:mb-6 lg:mb-8">
        Running Campaigns
      </h1>
      <Marquee pauseOnHover={true}>
        {runningCampaigns.map((campaign, indx) => (
          <div class="max-w-sm p-6 bg-white rounded-lg ml-8">
            <p className="text-primary">#{indx + 1}</p>
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">
              {campaign?.campaignTitle}
            </h2>

            <p class="mb-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {campaign?.description}
            </p>

            <Link
              to={`/campaign/${campaign._id}`}
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              See More
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default RunningCampaigns;
