import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";

const CampaignDetailsPage = () => {
  const navigate = useNavigate();
  const campaign = useLoaderData();

  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <div className="my-4">
      <button
        to={"/"}
        className="btn bg-white text-primary border-0 mb-8"
        onClick={handleGoback}
      >
        <IoMdArrowRoundBack /> <span>Back</span>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  p-8 bg-white rounded-lg">
        {/* Campaign Image */}
        <div className="flex justify-center">
          <img
            src={campaign?.imageURL}
            alt="Thumbnail"
            className="rounded-lg shadow-md w-full h-auto object-cover max-w-md"
          />
        </div>

        {/* Campaign Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {campaign?.campaignTitle}
          </h2>
          {/* <p className="badge badge-primary mb-4">{jsx Copy code
campaignType || "Unknown Type"}</p> */}

          <p className="text-gray-600 mb-4">{campaign?.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">
                Minimum Donation:
              </span>
              <span className="text-gray-800">
                TK {campaign?.minimumDonation}/-
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Deadline:</span>
              <span className="text-gray-800">{campaign?.deadline}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">User Email:</span>
              <span className="text-gray-800">{campaign?.userEmail}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">User Name:</span>
              <span className="text-gray-800">{campaign?.userName}</span>
            </div>
          </div>

          {/* Donate Button */}
          <div className="mt-6">
            <button className="btn btn-primary w-full md:w-auto">Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
