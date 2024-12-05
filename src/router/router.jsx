import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddCampaignPage from "../pages/AddCampaignPage";
import PrivateRoute from "../components/PrivateRoute";
import CampaignDetailsPage from "../pages/CampaignDetailsPage";
import MyCampaignPage from "../pages/MyCampaignPage";
import UpdateCampaignPage from "../pages/UpdateCampaignPage";
import MyDonationsPage from "../pages/MyDonationsPage";
import AllCampaignsPage from "../pages/AllCampaignsPage";

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
        element: <AllCampaignsPage />,
        loader: () => fetch("http://localhost:3000/allCampaign"),
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
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonationsPage />
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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/campaign/${params.id}`),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/campaign/${params.id}`),
      },
    ],
  },
]);
