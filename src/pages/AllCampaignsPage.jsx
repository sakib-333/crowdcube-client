import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingComponent from "../components/LoadingComponent";
import CampaignCard from "../components/CampaignCard";
import useAxios from "../hook/useAxios";

const AllCampaignsPage = () => {
  const { isLoading, setIsLoading } = useContext(AuthContext);
  const [allCampaigns, setAllCampaigns] = useState([]);
  const axiosInstance = useAxios();
  const [sortBy, setSortBy] = useState("general");

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .post("/allCampaign", { sortBy })
      .then((res) => {
        setAllCampaigns(() => res.data);
      })
      .finally(() => setIsLoading(false));
  }, [sortBy]);

  useEffect(() => {
    document.title = "Crowdcube | All Campaigns";
  }, []);

  return (
    <>
      <div className="flex items-center gap-1 my-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-text">Sort by Donation</span>
          </div>
          <select
            className="select text-text bg-background border border-text"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option className="text-text" value={"general"}>
              General
            </option>
            <option className="text-text" value={"ascending"}>
              Ascending
            </option>
            <option className="text-text" value={"descending"}>
              Descending
            </option>
          </select>
        </label>
      </div>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {allCampaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllCampaignsPage;
