import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
    <div>
      <Outlet context={{ isNavShow: showNav }} />{width}
    </div>
  );
}

export default MainLayout;
