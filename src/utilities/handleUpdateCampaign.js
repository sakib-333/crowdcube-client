import Swal from "sweetalert2";

export const handleUpdateCampaign = (e, id, navigate) => {
  e.preventDefault();
  const form = e.target;

  const imageURL = form.imageURL.value;
  const campaignTitle = form.campaignTitle.value;
  const campaignType = form.campaignType.value;
  const description = form.description.value;
  const minimumDonation = form.minimumDonation.value;
  const deadline = form.deadline.value;
  const userEmail = form.userEmail.value;
  const userName = form.userName.value;

  const updatedCampaign = {
    imageURL,
    campaignTitle,
    campaignType,
    description,
    minimumDonation,
    deadline,
    userEmail,
    userName,
  };

  fetch(`https://ph-b10-a10-server.vercel.app/updateCampaign/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCampaign),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        navigate(-1);

        Swal.fire({
          icon: "success",
          title: "Campaign updated successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        form.reset();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
