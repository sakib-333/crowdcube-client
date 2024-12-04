import React from "react";
import { Link } from "react-router-dom";

const AllCampaignsPage = () => {
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
          <tr>
            <th>1</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>New Bussiness Idea</td>
            <td>Idea</td>
            <td>20/12/2024</td>
            <th>
              <Link to={`/campaign/1`} className="btn btn-ghost btn-xs">
                Details
              </Link>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>New Bussiness Idea</td>
            <td>Idea</td>
            <td>20/12/2024</td>
            <th>
              <Link to={`/campaign/2`} className="btn btn-ghost btn-xs">
                Details
              </Link>
            </th>
          </tr>

          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>New Bussiness Idea</td>
            <td>Idea</td>
            <td>20/12/2024</td>
            <th>
              <Link to={`/campaign/3`} className="btn btn-ghost btn-xs">
                Details
              </Link>
            </th>
          </tr>

          {/* row 4 */}
          <tr>
            <th>4</th>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </td>
            <td>New Bussiness Idea</td>
            <td>Idea</td>
            <td>20/12/2024</td>
            <th>
              <Link to={`/campaign/4`} className="btn btn-ghost btn-xs">
                Details
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaignsPage;
