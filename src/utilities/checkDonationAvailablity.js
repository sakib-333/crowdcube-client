import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const checkDonationAvailablity = (deadline, campaign, donorInfo) => {
  const today = new Date();
  const date = new Date(deadline);

  if (today > date) {
    Swal.fire({
      title: "Oh No!",
      text: "The deadline is over.",
      icon: "error",
    });
  } else {
    const { _id: campaign_id, ...campaignExceptId } = campaign;

    fetch("https://ph-b10-a10-server.vercel.app/myDonations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...donorInfo, ...campaignExceptId, campaign_id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your donation is successful",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch(() => toast.error("Something went wrong."));
  }
};
