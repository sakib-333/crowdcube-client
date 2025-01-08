import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import LoadingComponent from "../components/LoadingComponent";
import { FaSortAmountUpAlt } from "react-icons/fa";
import CampaignCard from "../components/CampaignCard";
import useAxios from "../hook/useAxios";

const AllCampaignsPage = () => {
  const { isLoading, setIsLoading } = useContext(AuthContext);
  const [allCampaigns, setAllCampaigns] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get("/allCampaign")
      .then((res) => {
        setAllCampaigns(() => res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    document.title = "Crowdcube | All Campaigns";
  }, []);


  const handleSortCampaigns = () => {
    setIsLoading(true);
    axiosInstance
      .get("/sort-campaigns")
      .then((res) => {
        setAllCampaigns(() => res.data);
      })
      .finally(() => setIsLoading(false));
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
