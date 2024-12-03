import { toast } from "react-toastify";

export const handleSigninWithGoogle = (signinWithGoogle, navigate) => {
  signinWithGoogle()
    .then(() => {
      toast.success("Welcome");
      navigate("/");
    })
    .catch((err) => console.log(err));
};
