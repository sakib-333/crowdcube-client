import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaignsPage = () => {
  const [allCampaigns, setAllCampaigns] = useState(useLoaderData() || []);

  return (
    <div className="bg-white overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="bg-purple-500 font-bold text-white">
            <th>#</th>
            <th>Thumbnail</th>
            <th>Campaign title</th>
            <th>Campaign type</th>
            <th>Deadline</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allCampaigns.map((campaign, indx) => (
            <tr key={campaign._id}>
              <th>{indx + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={campaign?.imageURL} alt="Thumbnail" />
                  </div>
                </div>
              </td>
              <td>{campaign?.campaignTitle}</td>
              <td>{campaign?.campaignType}</td>
              <td>{campaign?.deadline}</td>
              <th>
                <Link
                  to={`/campaign/${campaign._id}`}
                  className="btn btn-ghost btn-xs"
                >
                  See More
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaignsPage;
