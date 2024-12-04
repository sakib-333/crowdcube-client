import React from "react";

const CampaignDetailsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 md:my-8 lg:my-12 p-8 bg-white rounded-lg">
      {/* Campaign Image */}
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/400"
          alt="photo"
          className="rounded-lg shadow-md w-full h-auto object-cover max-w-md"
        />
      </div>

      {/* Campaign Info */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          New Business Idea
        </h2>
        {/* <p className="badge badge-primary mb-4">{jsx Copy code
campaignType || "Unknown Type"}</p> */}

        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nobis cupiditate itaque fuga quisquam neque libero veritatis
          laboriosam numquam magni. Fugit obcaecati ea reprehenderit, laborum
          vel animi odio sint explicabo?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-700">
              Minimum Donation:
            </span>
            <span className="text-gray-800">$ 500/-</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-700">Deadline:</span>
            <span className="text-gray-800">20/12/2024</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-700">User Email:</span>
            <span className="text-gray-800">sakib@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-700">User Name:</span>
            <span className="text-gray-800">Sakibur Rahman</span>
          </div>
        </div>

        {/* Donate Button */}
        <div className="mt-6">
          <button className="btn btn-primary w-full md:w-auto">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
