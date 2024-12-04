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
};
