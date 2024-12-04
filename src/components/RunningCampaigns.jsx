import React from "react";

const RunningCampaigns = () => {
  const runningCampaigns = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-4 md:mb-6 lg:mb-8">
        Running Campaigns
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {runningCampaigns.map((campaign) => (
          <div key={campaign} className="card card-compact bg-base-100">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
