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
          <div key={campaign._id} className="card card-compact bg-base-100">
            <figure>
              <img
                className="w-full h-full"
                src={campaign?.imageURL}
                alt="Thumbnail"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{campaign?.campaignTitle}</h2>
              <p>Minimum Donation: {campaign?.minimumDonation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonationsPage;
