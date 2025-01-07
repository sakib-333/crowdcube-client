import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { checkDonationAvailablity } from "../utilities/checkDonationAvailablity";
import { AuthContext } from "../provider/AuthProvider";
import GobackBtn from "../components/GobackBtn";

const CampaignDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const campaign = useLoaderData();

  useEffect(() => {
    document.title = "Crowdcube | Campaign Details";
  }, []);

  return (
    <div className="my-4 text-text">
      <GobackBtn prevRoute="/allCampaign" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  p-8 bg-background rounded-lg">
        {/* Campaign Image */}
        <div className="flex justify-center">
          <img
            src={campaign?.imageURL}
            alt="Thumbnail"
            className="rounded-lg w-full h-auto object-cover max-w-md"
          />
        </div>

        {/* Campaign Info */}
        <div>
          <h2 className="text-3xl font-bold text-text mb-4">
            {campaign?.campaignTitle}
          </h2>
          <p className="badge badge-primary py-2 px-3 mb-4">
            {campaign?.campaignType}
          </p>

          <p className="text-text opacity-50 mb-4">{campaign?.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Minimum Donation:</span>
              <span>TK {campaign?.minimumDonation}/-</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Deadline:</span>
              <span>{campaign?.deadline}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">User Email:</span>
              <span>{campaign?.userEmail}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">User Name:</span>
              <span>{campaign?.userName}</span>
            </div>
          </div>

          {/* Donate Button */}
          <div className="mt-6">
            <button
              className="btn btn-primary w-full md:w-auto"
              onClick={() =>
                checkDonationAvailablity(campaign?.deadline, campaign, {
                  donorEmail: user?.email,
                  donorName: user.displayName,
                })
              }
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
