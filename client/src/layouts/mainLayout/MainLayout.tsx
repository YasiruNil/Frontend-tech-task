import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";

function MainLayout() {
  const [showNav, setShowNav] = useState(true);

  const handleResize = () => {
    const { innerWidth: width } = window;
    if (width <= 968) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  const handleCollapse = () => {
    setShowNav(!showNav);
  };

  // when user change the window screen size, it will hide the sidebar
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-layout-wrapper">
      {/* Header */}
      <Header />
      <div className="main-layout-body">
        {/* Sidebar */}
        <Sidebar isNavShow={showNav} handleCollapse={() => handleCollapse()} />
        {/* Main page */}
        <Outlet context={{ isNavShow: showNav }} />
      </div>
    </div>
  );
}

export default MainLayout;
