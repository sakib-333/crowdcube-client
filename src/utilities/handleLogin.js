import { toast } from "react-toastify";

export const handleLogin = (e, signinUser, navigate, setLoading) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  // console.log(email, password);
  signinUser(email, password)
    .then(() => {
      toast.success("Welcome back");
      navigate("/");
    })
    .catch((err) => {
      setLoading(false);
      toast.error(`${err}`);
    });
};
