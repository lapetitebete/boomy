import React from "react";
import { Outlet } from "react-router-dom";

import useWindowSize from "hooks/useWindowResize";
import ScrollToTop from "routers/ScrollToTop";
import SiteHeader from "./SiteHeader";
import FooterNav from "components/FooterNav";
import Footer from "shared/Footer/Footer";

const RootLayout = () => {
  let WIN_WIDTH = useWindowSize().width;
  if (typeof window !== "undefined") {
    WIN_WIDTH = WIN_WIDTH || window.innerWidth;
  }

  return (
    <>
      <ScrollToTop />
      <SiteHeader />

      <Outlet />

      {WIN_WIDTH < 768 && <FooterNav />}
      <Footer />
    </>
  );
};

export default RootLayout;
