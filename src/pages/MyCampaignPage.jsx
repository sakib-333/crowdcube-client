import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { handleDeleteCampaign } from "../utilities/handleDeleteCampaign";
import LoadingComponent from "../components/LoadingComponent";
import { Typewriter } from "react-simple-typewriter";
import { CiViewTable } from "react-icons/ci";
import { IoGridSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaDonate, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

const MyCampaignPage = () => {
  const { user, isLoading, setIsLoading } = useContext(AuthContext);
  const [myCampaigns, setMyCampaigns] = useState([]);
  const [viewMethod, setViewMethod] = useState("card");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://ph-b10-a10-server.vercel.app/myCampaign/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(() => false);
        setMyCampaigns(data);
      })
      .catch(() => toast.error("Something went wrong!"));
  }, []);

  useEffect(() => {
    document.title = "Crowdcube | My Campaign";
  }, []);

  return isLoading ? (
    <LoadingComponent />
  ) : myCampaigns.length ? (
    <div>
      <div className="my-4 flex justify-end">
        <div className="join">
          <button
            className={`btn-primary w-12 rounded-tr-none rounded-br-none border border-x border-text ${
              viewMethod === "table" ? "bg-background" : ""
            } flex items-center gap-1`}
            onClick={() => setViewMethod("card")}
          >
            <FaCheck
              className={`${viewMethod === "card" ? "block" : "hidden"}`}
            />
            <IoGridSharp />
          </button>
          <button
            className={`btn-primary w-12 rounded-tl-none border border-x border-text ${
              viewMethod === "card" ? "bg-background" : ""
            } rounded-bl-none flex items-center gap-1`}
            onClick={() => setViewMethod("table")}
          >
            <FaCheck
              className={`${viewMethod === "table" ? "block" : "hidden"}`}
            />
            <CiViewTable />
          </button>
        </div>
      </div>
      {viewMethod === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {myCampaigns.map((campaign) => (
            <div key={campaign._id} className="max-w-52 w-full mx-auto">
              <img
                className="w-full h-24 bg-white"
                src={campaign?.imageURL}
                alt="Thumbnail"
              />
              <div className="px-2 pb-2 text-text flex flex-col gap-1 bg-tertiary">
                <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {campaign?.campaignTitle}
                </h1>
                <div className="flex items-center gap-1">
                  <BiCategory /> <span>{campaign?.campaignType}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaDonate /> <span>{campaign?.minimumDonation}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <Link
                    to={`/updateCampaign/${campaign._id}`}
                    className="px-3 py-2 hover:bg-secondary rounded"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="px-3 py-2 hover:bg-secondary rounded"
                    onClick={() =>
                      handleDeleteCampaign(campaign?._id, setMyCampaigns)
                    }
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {viewMethod === "table" && (
        <div className="bg-background overflow-x-auto">
          <table className="table border border-text">
            {/* head */}
            <thead className="border border-text">
              <tr className="bg-background font-bold text-text border border-text">
                <th className="border border-text">#</th>
                <th className="border border-text">Thumbnail</th>
                <th className="border border-text">Campaign title</th>
                <th className="border border-text">Campaign type</th>
                <th className="border border-text">Deadline</th>
                <th className="border border-text">Options</th>
              </tr>
            </thead>
            <tbody className="text-text border border-text">
              {myCampaigns.map((campaign, indx) => (
                <tr key={campaign._id} className="border border-text">
                  <th className="border border-text">{indx + 1}</th>
                  <td className="border border-text">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={campaign?.imageURL} alt="Thumbnail" />
                      </div>
                    </div>
                  </td>
                  <td className="border border-text">
                    {campaign?.campaignTitle}
                  </td>
                  <td className="border border-text">
                    {campaign?.campaignType}
                  </td>
                  <td className="border border-text">{campaign?.deadline}</td>
                  <th>
                    <div className="flex gap-2">
                      <Link
                        to={`/updateCampaign/${campaign._id}`}
                        className="px-3 py-2 hover:bg-secondary rounded"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        className="px-3 py-2 hover:bg-secondary rounded"
                        onClick={() =>
                          handleDeleteCampaign(campaign?._id, setMyCampaigns)
                        }
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  ) : (
    <h1 className="text-xl font-bold text-primary">
      <Typewriter
        words={["If you add any campaign, will appear here."]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default MyCampaignPage;
