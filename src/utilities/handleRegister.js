import { toast } from "react-toastify";

const regEx = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d)).{6,}$/;

export const handleRegister = (
  e,
  setPassErrMsg,
  signupUser,
  updateUserProfile,
  navigate,
  setLoading
) => {
  e.preventDefault();

  const form = e.target;

  const displayName = form.name.value;
  const photoURL = form.photoURL.value;
  const email = form.email.value;
  const password = form.password.value;

  if (regEx.test(password)) {
    // console.log(displayName, photoURL, email, password);
    signupUser(email, password)
      .then(() => {
        updateUserProfile({ displayName, photoURL }).then(() => {
          toast.success("Registration successfull");
          navigate("/");
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`${err}`);
      });
    setPassErrMsg(null);
  } else {
    setPassErrMsg(
      "Must contain at least one lower case, one upper case, one number, and length at least 6."
    );
  }
};
