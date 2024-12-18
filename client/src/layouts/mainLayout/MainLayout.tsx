import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";

function MainLayout() {
  const { innerWidth: width } = window;
  const [showNav, setShowNav] = useState(true);

  const handleResize = () => {
    if (width <= 960) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="main-layout-wrapper">
      {/* Header */}
      <Header />
      <div className="main-layout-body">
        {/* Sidebar */}
        <Sidebar />
        {/* Main page */}
        <Outlet context={{ isNavShow: showNav }} />
      </div>
    </div>
  );
}

export default MainLayout;
