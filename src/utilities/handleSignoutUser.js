import { toast } from "react-toastify";

export const handleSignoutUser = (signoutUser) => {
  signoutUser()
    .then(() => toast.success("Bye..."))
    .catch((err) => toast.error(`${err}`));
};
