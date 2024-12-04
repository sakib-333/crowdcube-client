import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddCampaignPage from "../pages/AddCampaignPage";
import PrivateRoute from "../components/PrivateRoute";
import CampaignDetailsPage from "../pages/CampaignDetailsPage";
import AllCampaigns from "../pages/AllCampaigns";
import MyCampaignPage from "../pages/MyCampaignPage";
import UpdateCampaignPage from "../pages/UpdateCampaignPage";

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
        path: "/allCampaign",
        element: <AllCampaigns />,
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaignPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaignPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaignPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetailsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
