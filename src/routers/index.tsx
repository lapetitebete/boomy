import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import ListingStayPage from "containers/ListingStayPage/ListingStayPage";
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage";
import ListingExperiencesPage from "containers/ListingExperiencesPage/ListingExperiencesPage";
import ListingExperiencesMapPage from "containers/ListingExperiencesPage/ListingExperiencesMapPage";
import ListingCarPage from "containers/ListingCarPage/ListingCarPage";
import ListingCarMapPage from "containers/ListingCarPage/ListingCarMapPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import PayPage from "containers/PayPage/PayPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountBilling from "containers/AccountPage/AccountBilling";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1";
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2";
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3";
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4";
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5";
import PageAddListing6 from "containers/PageAddListing1/PageAddListing6";
import PageAddListing7 from "containers/PageAddListing1/PageAddListing7";
import PageAddListing8 from "containers/PageAddListing1/PageAddListing8";
import PageAddListing9 from "containers/PageAddListing1/PageAddListing9";
import PageAddListing10 from "containers/PageAddListing1/PageAddListing10";
import PageHome2 from "containers/PageHome/PageHome2";
import ProfessionalPage from "containers/ProfessionalPage/ProfessionalPage";
import ListingRealEstateMapPage from "containers/ListingRealEstatePage/ListingRealEstateMapPage";
import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";
import PageHome3 from "containers/PageHome/PageHome3";
import ListingStayDetailPage from "containers/ListingDetailPage/listing-stay-detail/ListingStayDetailPage";
import ListingCarDetailPage from "containers/ListingDetailPage/listing-car-detail/ListingCarDetailPage";
import ListingExperiencesDetailPage from "containers/ListingDetailPage/listing-experiences-detail/ListingExperiencesDetailPage";
import RootLayout from "containers/RootLayout";
import ListingProfessionalsPage, {
  loader as ProfessionalsLoader,
} from "containers/ListingProfessionalsPage/ListingProfessionalsPage";
import ProfessionalProfilePage from "containers/ProfessionalProfilePage/ProfessionalProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <PageHome /> },
      { path: "/#", element: <PageHome /> },
      { path: "/home-1-header-2", element: <PageHome /> },
      { path: "/home-2", element: <PageHome2 /> },
      { path: "/home-3", element: <PageHome3 /> },
      //
      { path: "/listing-stay", element: <ListingStayPage /> },
      {
        path: "/professionnels",
        element: <ListingProfessionalsPage />,
        // loader: ProfessionalsLoader,
      },
      { path: "/listing-stay-map", element: <ListingStayMapPage /> },
      { path: "/listing-stay-detail", element: <ListingStayDetailPage /> },
      //
      {
        path: "/listing-experiences",
        element: <ListingExperiencesPage />,
      },
      {
        path: "/listing-experiences-map",
        element: <ListingExperiencesMapPage />,
      },
      {
        path: "/listing-experiences-detail",
        element: <ListingExperiencesDetailPage />,
      },
      //
      { path: "/listing-car", element: <ListingCarPage /> },
      { path: "/listing-car-map", element: <ListingCarMapPage /> },
      { path: "/listing-car-detail", element: <ListingCarDetailPage /> },
      //
      {
        path: "/listing-real-estate-map",
        element: <ListingRealEstateMapPage />,
      },
      { path: "/listing-real-estate", element: <ListingRealEstatePage /> },
      //
      { path: "/listing-flights", element: <ListingFlightsPage /> },
      //
      { path: "/checkout", element: <CheckOutPage /> },
      { path: "/pay-done", element: <PayPage /> },
      //
      { path: "/professional", element: <ProfessionalPage /> },
      {
        path: "/professional/:professionalId",
        element: <ProfessionalProfilePage />,
      },
      { path: "/author", element: <AuthorPage /> },
      { path: "/account", element: <AccountPage /> },
      { path: "/account-password", element: <AccountPass /> },
      { path: "/account-savelists", element: <AccountSavelists /> },
      { path: "/account-billing", element: <AccountBilling /> },
      //
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog-single", element: <BlogSingle /> },
      //
      { path: "/add-listing-1", element: <PageAddListing1 /> },
      { path: "/add-listing-2", element: <PageAddListing2 /> },
      { path: "/add-listing-3", element: <PageAddListing3 /> },
      { path: "/add-listing-4", element: <PageAddListing4 /> },
      { path: "/add-listing-5", element: <PageAddListing5 /> },
      { path: "/add-listing-6", element: <PageAddListing6 /> },
      { path: "/add-listing-7", element: <PageAddListing7 /> },
      { path: "/add-listing-8", element: <PageAddListing8 /> },
      { path: "/add-listing-9", element: <PageAddListing9 /> },
      { path: "/add-listing-10", element: <PageAddListing10 /> },
      //
      { path: "/contact", element: <PageContact /> },
      { path: "/about", element: <PageAbout /> },
      { path: "/signup", element: <PageSignUp /> },
      { path: "/login", element: <PageLogin /> },
      { path: "/subscription", element: <PageSubcription /> },
    ],
  },
]);

const MyRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MyRoutes;
