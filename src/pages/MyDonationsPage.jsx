import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import LoadingComponent from "../components/LoadingComponent";
import { Typewriter } from "react-simple-typewriter";
import Heading from "../components/Heading";
import { BiCategory } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import * as motion from "motion/react-client";
import useAxios from "../hook/useAxios";

const MyDonationsPage = () => {
  const { user, isLoading, setIsLoading } = useContext(AuthContext);
  const [myDonations, setMyDonations] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .post(`/getMyDonations`, { email: user?.email })
      .then((res) => {
        setMyDonations(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    document.title = "Crowdcube | My Donations";
  }, []);

  return isLoading ? (
    <LoadingComponent />
  ) : myDonations.length ? (
    <div>
      <Heading title="My Donations" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {myDonations.map((campaign) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={campaign._id}
            className="max-w-52 w-full mx-auto"
          >
            <img
              className="w-full h-24 bg-white"
              src={campaign?.imageURL}
              alt="Thumbnail"
            />
            <div className="px-2 pb-2 flex text-text flex-col gap-1 bg-tertiary">
              <h1 className="overflow-hidden text-ellipsis whitespace-nowrap">
                {campaign?.campaignTitle}
              </h1>
              <div className="flex items-center gap-1">
                <BiCategory /> <span>{campaign?.campaignType}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaDonate /> <span>{campaign?.minimumDonation}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ) : (
    <h1 className="text-xl font-bold text-primary">
      <Typewriter
        words={["If you donate, will appear here."]}
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

export default MyDonationsPage;
