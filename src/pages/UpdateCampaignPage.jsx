import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleUpdateCampaign } from "../utilities/handleUpdateCampaign";
import { AuthContext } from "../provider/AuthProvider";
import GobackBtn from "../components/GobackBtn";
import useAxios from "../hook/useAxios";
import LoadingComponent from "../components/LoadingComponent";

const UpdateCampaignPage = () => {
  const [campaign, setCampaign] = useState(null);
  const { user, isLoading, setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/campaign/${params.id}`, { email: user?.email })
      .then((res) => {
        setCampaign(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    document.title = "Crowdcube | Update Campaign";
  }, []);

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <div className="w-5/6 mx-auto my-4">
      <GobackBtn prevRoute="/myCampaign" />
      <div className="bg-background text-text border border-text p-4 md:p-8 lg:p-12 space-y-4 rounded-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center">
          Update Campaign
        </h1>
        <p className="max-w-[800px] opacity-50 text-center mx-auto">
          Upadte your campaign to share your project, set goals, and inspire
          support. Customize details to attract donors and bring your vision to
          life.
        </p>

        <form
          className="w-full grid lg:grid-cols-2 gap-4 items-center"
          onSubmit={(e) =>
            handleUpdateCampaign(e, campaign?._id, navigate, user)
          }
        >
          {/* Image URL start */}
          <label className="form-control text-text w-full">
            <div className="label">
              <span className="label-text text-text font-bold">Image URL</span>
            </div>
            <input
              type="text"
              name="imageURL"
              className="input input-bordered bg-tertiary w-full"
              placeholder="Image URL"
              required
              defaultValue={campaign?.imageURL}
            />
          </label>
          {/* Image URL end */}

          {/* Campaign title start */}
          <label className="form-control text-text w-full">
            <div className="label">
              <span className="label-text text-text font-bold">
                Campaign title
              </span>
            </div>
            <input
              type="text"
              placeholder="Campaign title"
              className="input input-bordered bg-tertiary w-full"
              name="campaignTitle"
              required
              defaultValue={campaign?.campaignTitle}
            />
          </label>
          {/* Campaign title end */}

          {/* Campaign type start */}
          <label className="form-control text-text w-full">
            <div className="label">
              <span className="label-text text-text font-bold">
                Campaign type
              </span>
            </div>
            <select
              defaultValue={campaign?.campaignType}
              className="select select-bordered bg-tertiary"
              name="campaignType"
              required
            >
              <option>Pick one</option>
              <option value={"Personal issue"}>Personal issue</option>
              <option value={"Startup"}>Startup</option>
              <option value={"Business"}>Business</option>
              <option value={"Creative ideas"}>Creative ideas</option>
              <option value={"Others"}>Others</option>
            </select>
          </label>
          {/* Campaign type end */}

          {/* Description start */}
          <label className="form-control text-text">
            <div className="label">
              <span className="label-text text-text font-bold">
                Description
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered bg-tertiary"
              placeholder="Description of the campaign"
              name="description"
              rows={1}
              defaultValue={campaign?.description}
            ></textarea>
          </label>
          {/* Description end */}

          {/* Minimum donation start */}
          <label className="form-control text-text w-full">
            <div className="label">
              <span className="label-text font-bold text-text">
                Minimum donation
              </span>
            </div>
            <input
              type="text"
              placeholder="Minimum donation"
              name="minimumDonation"
              className="input input-bordered w-full bg-tertiary"
              required
              defaultValue={campaign?.minimumDonation}
            />
          </label>
          {/* Minimum donation end */}

          {/* Deadline start */}
          <label className="form-control w-full text-text">
            <div className="label">
              <span className="label-text font-bold text-text">Deadline</span>
            </div>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full bg-tertiary"
              required
              defaultValue={campaign?.deadline}
            />
          </label>
          {/* Deadline end */}

          {/* User Email start */}
          <label className="form-control w-full text-text">
            <div className="label">
              <span className="label-text font-bold text-text">User Email</span>
            </div>
            <input
              type="email"
              defaultValue={campaign?.userEmail}
              readOnly
              name="userEmail"
              className="input input-bordered w-full bg-tertiary"
              required
            />
          </label>
          {/* User Email end */}

          {/* User Name start */}
          <label className="form-control w-full text-text">
            <div className="label">
              <span className="label-text font-bold text-text">User Name</span>
            </div>
            <input
              type="text"
              name="userName"
              defaultValue={campaign?.userName}
              readOnly
              className="input input-bordered w-full bg-tertiary"
              required
            />
          </label>
          {/* User Name end */}

          <button type="submit" className="btn btn-primary lg:col-span-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaignPage;
