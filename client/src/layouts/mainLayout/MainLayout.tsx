import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";

const MainLayout = () => {
  const [showNav, setShowNav] = useState(true);

  const handleCollapse = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="main-layout-wrapper">
      {/* Header */}
      <Header />
      <div className="main-layout-body">
        {/* Sidebar */}
        <Sidebar isNavShow={showNav} handleCollapse={handleCollapse} />
        {/* Main page */}
        <Outlet context={{ isNavShow: showNav }} />
      </div>
    </div>
  );
};

export default MainLayout;
