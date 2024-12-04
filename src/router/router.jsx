import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddCampaignPage from "../pages/AddCampaignPage";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaignPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
