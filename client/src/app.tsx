import React, { useState, useEffect } from "react";
import Providers from "./redux/Provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./routes/NotFound";
import MainPage from "./routes/MainPage";
import MainLayout from "./layouts/mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/category",
        element: <MainPage />,
      }
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  // Step 2: Use useEffect to detect DOM load event
  useEffect(() => {
    // Check if the DOM is already loaded or not
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Listen for the 'load' event which triggers when DOM is fully loaded
      window.onload = () => {
        setLoading(false);
      };
    }

    // Cleanup function to remove the event listener in case component unmounts
    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      {/* Step 3: Show loader while DOM is loading */}
      {loading ? (
        <div className="loader">
          <p>Loading...</p>
          {/* Replace with a spinner */}
        </div>
      ) : (
        <Providers>
          <RouterProvider router={router} />
        </Providers>
      )}
    </>
  );
}

export default App;
