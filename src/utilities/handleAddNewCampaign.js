import Swal from "sweetalert2";

export const handleAddNewCampaign = (e) => {
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

  const newCampaign = {
    imageURL,
    campaignTitle,
    campaignType,
    description,
    minimumDonation,
    deadline,
    userEmail,
    userName,
  };

  //   console.log(
  //     campaignTitle,
  //     campaignType,
  //     minimumDonation,
  //     deadline,
  //     userEmail,
  //     userName,
  //     imageURL,
  //     description
  //   );
  fetch("http://localhost:3000/addCampaign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCampaign),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Campaign added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
