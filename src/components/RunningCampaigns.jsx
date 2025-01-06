import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Heading from "./Heading";

const RunningCampaigns = () => {
  const [runningCampaigns, setRunningCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://ph-b10-a10-server.vercel.app/currently-running-campaigns")
      .then((res) => res.json())
      .then((data) => setRunningCampaigns(data))
      .catch(() => toast.error("Something went wrong."));
  }, []);

  return (
    <div>
      <Heading title="Running Campaigns" />
      <Marquee pauseOnHover={true}>
        {runningCampaigns.map((campaign, indx) => (
          <div
            className="max-w-sm p-6 border-2 border-accent/40 bg-background rounded-lg ml-8"
            key={campaign._id}
          >
            <p className="text-accent">#{indx + 1}</p>
            <h2 className="text-2xl font-semibold text-text mb-2">
              {campaign?.campaignTitle}
            </h2>

            <p className="mb-4 text-text opacity-50 overflow-hidden text-ellipsis whitespace-nowrap">
              {campaign?.description}
            </p>

            <Link to={`/campaign/${campaign._id}`} className="btn-primary">
              See More
            </Link>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default RunningCampaigns;
