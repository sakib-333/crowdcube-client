import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { handleAddNewCampaign } from "../utilities/handleAddNewCampaign";

const AddCampaignPage = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Crowdcube | Add New Campaign";
  }, []);

  return (
    <div className="w-5/6 mx-auto my-4">
      <div className="bg-background text-text p-4 border border-text md:p-8 lg:p-12 space-y-4 rounded-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Add New Campaign
        </h1>
        <p className="max-w-[800px] text-center mx-auto opacity-50">
          Add a new campaign to share your project, set goals, and inspire
          support. Customize details to attract donors and bring your vision to
          life.
        </p>

        <form
          className="w-full grid lg:grid-cols-2 gap-4 items-center"
          onSubmit={(e) => handleAddNewCampaign(e, user)}
        >
          {/* Image URL start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">Image URL</span>
            </div>
            <input
              type="text"
              name="imageURL"
              className="input input-bordered bg-tertiary w-full"
              placeholder="Image URL"
              required
            />
          </label>
          {/* Image URL end */}

          {/* Campaign title start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">
                Campaign title
              </span>
            </div>
            <input
              type="text"
              placeholder="Campaign title"
              className="input input-bordered w-full bg-tertiary"
              name="campaignTitle"
              required
            />
          </label>
          {/* Campaign title end */}

          {/* Campaign type start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">
                Campaign type
              </span>
            </div>
            <select
              className="select select-bordered text-text bg-tertiary"
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
              <span className="label-text text-text font-bold">
                Description
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered bg-tertiary"
              placeholder="Description of the campaign"
              name="description"
              rows={1}
            ></textarea>
          </label>
          {/* Description end */}

          {/* Minimum donation start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">
                Minimum donation
              </span>
            </div>
            <input
              type="text"
              placeholder="Minimum donation"
              name="minimumDonation"
              className="input input-bordered bg-tertiary w-full"
              required
            />
          </label>
          {/* Minimum donation end */}

          {/* Deadline start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">Deadline</span>
            </div>
            <input
              type="date"
              name="deadline"
              className="input input-bordered bg-tertiary w-full"
              required
            />
          </label>
          {/* Deadline end */}

          {/* User Email start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">User Email</span>
            </div>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              name="userEmail"
              className="input input-bordered bg-tertiary w-full"
              required
            />
          </label>
          {/* User Email end */}

          {/* User Name start */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-text font-bold">User Name</span>
            </div>
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered bg-tertiary w-full"
              required
            />
          </label>
          {/* User Name end */}

          <button type="submit" className="btn btn-primary lg:col-span-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCampaignPage;
