import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiCategory } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

const CampaignCard = ({ campaign }) => {
  return (
    <Fade direction="down">
      <motion.div
        className="max-w-52 w-full mx-auto"
        whileHover={{ scale: 1.05 }}
      >
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
          <Link
            to={`/campaign/${campaign._id}`}
            className="btn-primary text-center uppercase bg-tertiary border border-text"
          >
            See More
          </Link>
        </div>
      </motion.div>
    </Fade>
  );
};

export default CampaignCard;
