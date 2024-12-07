import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyDonationsPage = () => {
  const { user } = useContext(AuthContext);
  const [myDonations, setMyDonations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myDonations/${user?.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => setMyDonations(data))
      .catch(() => toast.error("Something went wrong."));
  }, []);

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-4 md:mb-6 lg:mb-8">
        My Donations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myDonations.map((campaign) => (
          <div className="max-w-sm mx-auto rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
            <img
              src={campaign?.imageURL}
              alt="Image"
              className="mb-4 h-48 w-full rounded-t-lg object-cover"
            />

            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              {campaign?.campaignTitle}
            </h2>
            <p className="mb-4 overflow-hidden text-ellipsis whitespace-nowrap">
              {campaign?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonationsPage;
