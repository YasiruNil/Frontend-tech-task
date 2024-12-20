import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header/Header";

const SingleProductLayout = () => {


  return (
    <div className="main-layout-wrapper">
      {/* Header */}
      <Header />
      <div className="main-layout-body">
        {/* Main page */}
        <Outlet />
      </div>
    </div>
  );
};

export default SingleProductLayout;
