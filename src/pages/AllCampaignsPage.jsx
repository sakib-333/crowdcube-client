import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import LoadingComponent from "../components/LoadingComponent";
import { FaSortAmountUpAlt } from "react-icons/fa";
import CampaignCard from "../components/CampaignCard";

const AllCampaignsPage = () => {
  const { isLoading, setIsLoading } = useContext(AuthContext);
  const [allCampaigns, setAllCampaigns] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ph-b10-a10-server.vercel.app/allCampaign")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(() => false);
        setAllCampaigns(data);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  }, []);

  useEffect(() => {
    document.title = "Crowdcube | All Campaigns";
  }, []);

  const handleSortCampaigns = () => {
    setIsLoading(true);
    fetch("https://ph-b10-a10-server.vercel.app/sort-campaigns")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(() => false);
        setAllCampaigns(() => data);
      })
      .catch(() => toast.error("Something went wrong."));
  };

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <>
      <button
        className="btn-primary flex items-center gap-1 my-4"
        onClick={handleSortCampaigns}
      >
        <FaSortAmountUpAlt />
        <span>Sort by Donation</span>
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {allCampaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </>
  );
};

export default AllCampaignsPage;
