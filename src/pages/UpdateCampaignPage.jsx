import React, { useContext, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";
import { handleUpdateCampaign } from "../utilities/handleUpdateCampaign";
import { AuthContext } from "../provider/AuthProvider";

const UpdateCampaignPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const campaign = useLoaderData();

  useEffect(() => {
    if (campaign.userEmail !== user?.email) {
      navigate("/allCampaign");
    }
  }, []);

  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <div className="w-5/6 mx-auto my-4">
      <button
        className="btn bg-white text-primary border-0 mb-8"
        onClick={handleGoback}
      >
        <IoMdArrowRoundBack /> <span>Back</span>
      </button>
      <div className="bg-[#F4F3F0] p-4 md:p-8 lg:p-12 space-y-4 rounded-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold text-center">
          Update Campaign
        </h1>
        <p className="max-w-[880px] text-center mx-auto font-sans">
          Upadte your campaign to share your project, set goals, and inspire
          support. Customize details to attract donors and bring your vision to
          life.
        </p>

        <form
          className="w-full grid lg:grid-cols-2 gap-4 items-center"
          onSubmit={(e) => handleUpdateCampaign(e, campaign?._id, navigate)}
        >
          {/* Image URL start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Image URL</span>
            </div>
            <input
              type="text"
              name="imageURL"
              className="input input-bordered w-full"
              placeholder="Image URL"
              required
              defaultValue={campaign?.imageURL}
            />
          </label>
          {/* Image URL end */}

          {/* Campaign title start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Campaign title</span>
            </div>
            <input
              type="text"
              placeholder="Campaign title"
              className="input input-bordered w-full"
              name="campaignTitle"
              required
              defaultValue={campaign?.campaignTitle}
            />
          </label>
          {/* Campaign title end */}

          {/* Campaign type start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Campaign type</span>
            </div>
            <select
              className="select select-bordered"
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
          <label className="form-control">
            <div className="label">
              <span className="label-text font-bold">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description of the campaign"
              name="description"
              rows={1}
              defaultValue={campaign?.description}
            ></textarea>
          </label>
          {/* Description end */}

          {/* Minimum donation start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Minimum donation</span>
            </div>
            <input
              type="number"
              placeholder="Minimum donation"
              name="minimumDonation"
              className="input input-bordered w-full"
              required
              defaultValue={campaign?.minimumDonation}
            />
          </label>
          {/* Minimum donation end */}

          {/* Deadline start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Deadline</span>
            </div>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full"
              required
              defaultValue={campaign?.deadline}
            />
          </label>
          {/* Deadline end */}

          {/* User Email start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">User Email</span>
            </div>
            <input
              type="email"
              defaultValue={campaign?.userEmail}
              readOnly
              name="userEmail"
              className="input input-bordered w-full"
              required
            />
          </label>
          {/* User Email end */}

          {/* User Name start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">User Name</span>
            </div>
            <input
              type="text"
              name="userName"
              defaultValue={campaign?.userName}
              readOnly
              className="input input-bordered w-full"
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
